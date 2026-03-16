const prisma = require("../lib/prisma");
const { supabase } = require("../utlis/supabase");

async function displaySharePage(req, res) {
    const url = req.originalUrl
        .replaceAll("%20", " ")
        .replaceAll(/^\/share|\/share-file$|\/folder$/g, "");
    if (req.originalUrl.match(/\/folder$/)) {
        const folder = await prisma.folder.findUnique({
            where: {
                folderUrl: url,
            },
        });
        res.render("sharePage", { folder });
        return;
    }
    const file = await prisma.files.findUnique({
        where: {
            fileUrl: url,
        },
    });
    res.render("sharePage", { file });
}

async function shareFile(req, res) {
    const url = req.originalUrl
        .replaceAll("%20", " ")
        .replaceAll(/^\/share\/dashboard|\/share-file$/g, "");
    const time = +req.body.time;
    const { data, error } = await supabase.storage
        .from("folderOfFolders")
        .createSignedUrl(url, 60 * time);
    if (error) {
        console.error(error);
    }
    const file = await prisma.files.findUnique({
        where: {
            fileUrl: "/dashboard" + url,
        },
    });
    res.render("sharePage", { publicUrl: data.signedUrl, file });
}

async function shareFolder(req, res) {
    const url = req.originalUrl.replace(/\/folder$/, "");
    const { time } = req.body;
    const duration = +time * 60 * 1000;
    const hash = crypto.randomUUID();
    const folder = await prisma.folder.findUnique({
        where: {
            folderUrl: url.replace("/share", ""),
        },
        include: {
            folders: true,
            files: true,
        },
    });
    const createdAt = Date.now();
    const expiredAt = new Date(createdAt + duration);
    const sharedFolder = await prisma.shareFolder.create({
        data: {
            shareUrl: url + "/" + hash,
            expiredAt,
            folderId: folder.id,
            name: folder.name,
        },
    });
    const shareChildrenFolder = async function (childrenFolder, childrenFile) {
        if (childrenFile.length !== 0) {
            for (const childFile of childrenFile) {
                const shareFile = await prisma.shareFile.create({
                    data: {
                        shareFileUrl:
                            "/share" + childFile.fileUrl + "/" + hash + "/file",
                        fileId: childFile.id,
                        expiredAt: sharedFolder.expiredAt,
                    },
                });
            }
        }
        if (childrenFolder.length === 0) {
            return;
        }
        for (const childFolder of childrenFolder) {
            const subChildFolder = await prisma.folder.findUnique({
                where: {
                    id: childFolder.id,
                },
                include: {
                    folders: true,
                    files: true,
                },
            });
            const shareChildFolder = await prisma.shareFolder.create({
                data: {
                    shareUrl: "/share" + childFolder.folderUrl + "/" + hash,
                    expiredAt,
                    folderId: subChildFolder.id,
                    name: subChildFolder.name,
                },
            });
            shareChildrenFolder(subChildFolder.folders, subChildFolder.files);
        }
    };
    shareChildrenFolder(folder.folders, folder.files);
    const sharedUrl = req.host + sharedFolder.shareUrl;
    res.render("sharePage", { publicUrl: sharedUrl, folder: folder });
}

async function displayShareFolder(req, res) {
    const folderUrl = "/" + req.params[0];
    const { hash } = req.params;
    const url = req.originalUrl;
    let haveHash = false;
    const sharedFolder = await prisma.shareFolder.findUnique({
        where: {
            shareUrl: url,
        },
    });
    const folder = await prisma.folder.findUnique({
        where: {
            folderUrl,
        },
        include: {
            folders: true,
            files: {
                include: {
                    shareFiles: true,
                },
            },
            shareFolders: true,
        },
    });
    if (!sharedFolder || !folder) {
        res.json({
            statusCode: "404",
            message: "folder not found in the system",
        });
        return;
    }
    const date = new Date();
    if (date > sharedFolder.expiredAt) {
        res.json({ statusCode: "400", message: "expired date" });
        return;
    }

    folder.files = folder.files.filter((file) =>
        file.shareFiles.some((shareFile) =>
            shareFile.shareFileUrl.includes(hash),
        ),
    );
    for (const file of folder.files) {
        file.shareFiles = file.shareFiles.filter((shareFile) =>
            shareFile.shareFileUrl.includes(hash),
        );
    }
    const parentFolder = await prisma.folder.findUnique({
        where: {
            id: folder.parentId || "",
        },
        include: {
            shareFolders: true,
        },
    });
    if (parentFolder) {
        haveHash = parentFolder.shareFolders.some((folder) =>
            folder.shareUrl.includes(hash),
        );
        parentFolder.shareFolders = parentFolder.shareFolders.filter((folder) =>
            folder.shareUrl.includes(hash),
        );
    }

    res.render("displayFolder", {
        folder: folder,
        parentFolder: haveHash ? parentFolder : undefined,
        files: folder.files,
        isShare: true,
        hash,
    });
}

async function displayShareFile(req, res) {
    const fileUrl = "/" + req.params[0];
    const { hash } = req.params;
    const sharedFile = await prisma.shareFile.findUnique({
        where: {
            shareFileUrl: req.originalUrl.replaceAll("%20", " "),
        },
    });
    if (!sharedFile) {
        res.json({ statusCode: 404, message: "file not found in the system" });
        return;
    }
    const date = new Date();
    if (date > sharedFile.expiredAt) {
        res.json({ statusCode: 400, message: "expired date" });
        return;
    }
    const file = await prisma.files.findUnique({
        where: {
            fileUrl,
        },
        include: {
            shareFiles: true,
        },
    });
    file.shareFiles = file.shareFiles.filter((shareFile) =>
        shareFile.shareFileUrl.includes(hash),
    );
    const parentFolder = await prisma.folder.findUnique({
        where: {
            id: file.folderId,
        },
        include: {
            shareFolders: true,
        },
    });
    parentFolder.shareFolders = parentFolder.shareFolders.filter(
        (shareFolder) => shareFolder.shareUrl.includes(hash),
    );
    res.render("displayFileInfo", { file, parentFolder, isShare: true });
}

async function downloadSharedFile(req, res) {
    const fileUrl = "/" + req.params[0];
    const sharedFile = await prisma.shareFile.findUnique({
        where: {
            shareFileUrl: req.originalUrl
                .replace(/\/download$/, "")
                .replaceAll("%20", " "),
        },
    });
    if (!sharedFile) {
        res.json({ statusCode: 404, message: "file not found in the system" });
        return;
    }
    const date = new Date();
    if (date > sharedFile.expiredAt) {
        res.json({ statusCode: 400, message: "expired date" });
        return;
    }
    const file = await prisma.files.findUnique({
        where: {
            fileUrl,
        },
        include: {
            shareFiles: true,
        },
    });
    const { data } = supabase.storage
        .from("folderOfFolders")
        .getPublicUrl(file.destinationId, { download: true });
    res.redirect(data.publicUrl);
}

module.exports = {
    displaySharePage,
    shareFile,
    shareFolder,
    displayShareFolder,
    displayShareFile,
    downloadSharedFile,
};
