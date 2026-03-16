const prisma = require("../lib/prisma");
const { matchedData, validationResult, body } = require("express-validator");
const { supabase } = require("../utlis/supabase");

const validFile = body("fileBackup")
    .custom((value, { req }) => {
        const fileSize = req.file.size;
        const _45MB = 47185920;
        const isTooHeavy = fileSize > _45MB;
        if (isTooHeavy) {
            throw new Error("Too heavy");
        }
        return true;
    })
    .withMessage("your file must not overflow 45 MB");

const validNameFolder = body("folderName")
    .custom(async (value, { req }) => {
        const url = req.originalUrl.replace(/\/update|\/create/, "");
        const folderParent = await prisma.folder.findUnique({
            where: {
                folderUrl: url,
            },
            include: {
                folders: true,
            },
        });
        const existingFolder = folderParent.folders
            .map((folder) => folder.name)
            .includes(value);
        if (existingFolder) {
            throw new Error("this name is already taken in this folder");
        }
    })
    .withMessage("this name is already taken in this folder");

const validUpdateFolder = body("name")
    .custom(async (value, { req }) => {
        const url = req.originalUrl.replace(/\/update|\/create/, "");
        const folder = await prisma.folder.findUnique({
            where: {
                folderUrl: url,
            },
            include: {
                folders: true,
            },
        });
        const folderParent = await prisma.folder.findUnique({
            where: {
                id: folder.parentId,
            },
            include: {
                folders: true,
            },
        });
        const existingFolder =
            folderParent.folders.map((folder) => folder.name).includes(value) &&
            value !== folder.name;
        if (existingFolder) {
            throw new Error("this name is already taken in this folder");
        }
    })
    .withMessage("this name is already taken in this folder");

async function uploadFile(req, res) {
    const errors = validationResult(req);

    const ext = "." + req.file.mimetype.replace(/^([^\/]+)\//, "");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    req.file.name =
        req.file.originalname.replace(/[^\x00-\x7F]+/g, "") +
        "-" +
        uniqueSuffix +
        ext;
    const file = req.file;
    const buffer = req.file.buffer;
    const url = req.originalUrl.replace("/upload", "").replaceAll("%20", " ");
    const name = req.file.name;
    const folder = await prisma.folder.findUnique({
        where: {
            folderUrl: url,
        },
        include: {
            folders: true,
            files: true,
        },
    });
    const parentFolder = await prisma.folder.findUnique({
        where: {
            id: folder.parentId || "",
        },
    });
    if (!errors.isEmpty()) {
        res.render("displayFolder", {
            folder: folder,
            parentFolder: parentFolder,
            files: folder.files,
            errors: errors.errors,
        });
        return;
    }
    const createFile = await prisma.files.create({
        data: {
            folderId: folder.id,
            fileUrl: url + "/" + name,
            destinationId: folder.destination + "/" + name,
            name: name,
            originalName: file.originalname,
            size: file.size,
        },
    });
    const { data, error } = await supabase.storage
        .from("folderOfFolders")
        .upload(createFile.destinationId, buffer, { contentType: ext });
    if (error) {
        console.error(error);
    }
    res.redirect(folder.folderUrl);
}

async function createFolder(req, res, next) {
    const errors = validationResult(req);
    const url = req.originalUrl.replace("/create", "").replaceAll("%20", " ");
    const parentFolder = await prisma.folder.findFirst({
        where: {
            folderUrl: url,
        },
    });
    if (!parentFolder) {
        res.status(404).send("<h1>this file don't exist</h1>");
        return;
    }
    if (!errors.isEmpty()) {
        res.render("createFolder", {
            errors: errors.errors,
            folderUrl: parentFolder.folderUrl,
        });
        return;
    }
    const { folderName } = matchedData(req);
    const destination = parentFolder.destination + "/" + folderName;
    const createFolder = await prisma.folder.create({
        data: {
            userId: +req.user.id,
            name: folderName,
            parentId: parentFolder.id,
            folderUrl: parentFolder.folderUrl + "/" + folderName,
            destination,
        },
    });
    res.redirect(url);
    next();
}

async function displayFolder(req, res) {
    const folder = await prisma.folder.findFirst({
        where: {
            folderUrl: req.originalUrl
                .replace(/\/create/, "")
                .replaceAll("%20", " "),
        },
        include: {
            folders: true,
            files: true,
        },
    });
    const parentFolder = await prisma.folder.findFirst({
        where: {
            id: folder.parentId || "",
        },
    });

    if (!folder) {
        res.status(404).send("<h1>this file or folder don't exist</h1>");
        return;
    }
    res.render("displayFolder", {
        folder: folder,
        parentFolder: parentFolder,
        files: folder.files,
    });
}

const displayCreateFolderPage = async (req, res) => {
    const url = req.originalUrl.replace("/create", "").replaceAll("%20", " ");
    const folder = await prisma.folder.findFirst({
        where: {
            folderUrl: url,
        },
    });
    if (!folder) {
        res.status(404).send("<h1>this file don't exist</h1>");
        return;
    }
    res.render("createFolder", {
        folderUrl: folder.folderUrl,
        name: folder.name,
    });
};

async function displayUpdateFolderPage(req, res) {
    const folder = await prisma.folder.findFirst({
        where: {
            folderUrl: req.originalUrl
                .replace("/update", "")
                .replaceAll("%20", " "),
        },
    });
    if (!folder) {
        res.status(404).send("<h1>this file don't exist");
        return;
    }
    res.render("updateFolder", { folder });
}

const updateFolder = async (req, res) => {
    const errors = validationResult(req);
    const findFolder = await prisma.folder.findUnique({
        where: {
            folderUrl: req.originalUrl
                .replace("/update", "")
                .replaceAll("%20", " "),
        },
    });
    if (!errors.isEmpty()) {
        res.render("updateFolder", {
            errors: errors.errors,
            folder: findFolder,
        });
        return;
    }
    const { name } = matchedData(req);

    const parentUrl = req.originalUrl
        .replace("/update", "")
        .replace(/\/[^\/]+$/, "")
        .replaceAll("%20", " ");
    const oldNameFolder = /\/[^\/]+$/.exec(
        req.originalUrl.replace("/update", "").replaceAll("%20", " "),
    )[0];
    const parentDestination = req.originalUrl
        .replace("/update", "")
        .replace(/\/[^\/]+$/, "")
        .replace("/dashboard/", "")
        .replaceAll("%20", " ");
    const newDestination = parentDestination + "/" + name;
    try {
        const folder = await prisma.folder.update({
            where: {
                folderUrl: req.originalUrl
                    .replace("/update", "")
                    .replaceAll("%20", " "),
            },
            data: {
                name: name,
                folderUrl: parentUrl + "/" + name,
                destination: newDestination,
            },
            include: {
                folders: true,
                files: true,
            },
        });

        async function updateChildren(childrenFolder, childrenFile) {
            if (childrenFile.length !== 0) {
                for (const file of childrenFile) {
                    const updatedFile = await prisma.files.update({
                        where: {
                            id: file.id,
                        },
                        data: {
                            fileUrl: file.fileUrl.replace(
                                oldNameFolder,
                                "/" + name,
                            ),
                            destinationId: file.destinationId.replace(
                                oldNameFolder,
                                "/" + name,
                            ),
                        },
                    });
                    const { data, error } = await supabase.storage
                        .from("folderOfFolders")
                        .move(file.destinationId, updatedFile.destinationId);
                    if (error) {
                        console.error(error);
                    }
                }
            }
            if (childrenFolder.length === 0) {
                return;
            }
            for (const subFolder of childrenFolder) {
                const updateSubFolder = await prisma.folder.update({
                    where: {
                        folderUrl: subFolder.folderUrl,
                    },
                    data: {
                        folderUrl: subFolder.folderUrl.replace(
                            oldNameFolder,
                            "/" + name,
                        ),
                        destination: subFolder.destination.replace(
                            oldNameFolder,
                            "/" + name,
                        ),
                    },
                    include: {
                        folders: true,
                        files: true,
                    },
                });
                updateChildren(updateSubFolder.folders, updateSubFolder.files);
            }
        }
        updateChildren(folder.folders, folder.files);

        res.redirect(parentUrl);
    } catch (error) {
        console.error("error:", error);

        res.status(404).send("<h1>this file or folder doesn't exist</h1>");
    }
};
async function deleteFolder(req, res) {
    const url = req.originalUrl.replace("/delete", "").replaceAll("%20", " ");
    const folder = await prisma.folder.findUnique({
        where: {
            folderUrl: url,
        },
        include: {
            folders: {
                include: {
                    shareFolders: true,
                },
            },
            files: {
                include: {
                    shareFiles: true,
                },
            },
        },
    });
    const parentFolder = await prisma.folder.findUnique({
        where: {
            id: folder.parentId,
        },
    });
    async function deleteChildren(childrenFolder) {
        if (childrenFolder.files.length !== 0) {
            for (const file of childrenFolder.files) {
                const deleteShareFile = await prisma.shareFile.deleteMany({
                    where: {
                        fileId: file.id,
                    },
                });
                const deletedFile = await prisma.files.delete({
                    where: {
                        id: file.id,
                    },
                });
            }
            const { data, error } = await supabase.storage
                .from("folderOfFolders")
                .remove(childrenFolder.files.map((file) => file.destinationId));
            if (error) {
                console.error(error);
            }
        }

        if (childrenFolder.folders.length === 0) {
            const deleteShareFolder = await prisma.shareFolder.deleteMany({
                where: {
                    folderId: childrenFolder.id,
                },
            });
            const deleteFolder = await prisma.folder.delete({
                where: {
                    id: childrenFolder.id,
                },
            });
            return;
        }
        for (const subFolder of childrenFolder.folders) {
            const deleteShareSubFolder = await prisma.shareFolder.deleteMany({
                where: {
                    folderId: subFolder.id,
                },
            });
            const subFolderChildren = await prisma.folder.findUnique({
                where: {
                    id: subFolder.id,
                },
                include: {
                    folders: true,
                    files: true,
                },
            });
            deleteChildren(subFolderChildren);
        }
        const deletedShareFolderWithoutChildrenFolder =
            await prisma.shareFolder.deleteMany({
                where: {
                    folderId: childrenFolder.id,
                },
            });
        const deletedAllChildrenFolder = await prisma.folder.delete({
            where: {
                id: childrenFolder.id,
            },
        });
    }
    deleteChildren(folder);
    res.redirect(parentFolder.folderUrl);
}

module.exports = {
    uploadFile,
    createFolder,
    displayFolder,
    displayCreateFolderPage,
    displayUpdateFolderPage,
    updateFolder,
    deleteFolder,
    validNameFolder,
    validUpdateFolder,
    validFile,
};
