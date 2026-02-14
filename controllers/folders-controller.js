const fs = require("node:fs");
const prisma = require("../lib/prisma");
const path = require("node:path");

async function displayDashboard(req, res) {
    const folders = await prisma.folder.findFirst({
        where: {
            destination: `../../../uploaded-file/${req.user.username}`,
        },
        include: {
            folders: true,
        },
    });
    console.log("folders:", folders);
    res.render("dashboard", { folders: folders.folders });
}

function uploadFile(req, res) {
    res.redirect("/dashboard/" + req.user.username);
}

async function createFolder(req, res, next) {
    const url = req.originalUrl.replace("/create", "");
    const parentFolder = await prisma.folder.findFirst({
        where: {
            folderUrl: url,
        },
    });
    console.log("parentFolder:", parentFolder);
    if (!parentFolder) {
        res.status(404).send("<h1>this file don't exist");
        return;
    }
    const { folderName } = req.body;
    const createFolder = await prisma.folder.create({
        data: {
            userId: +req.user.id,
            name: folderName,
            parentId: parentFolder.id,
            destination: parentFolder.destination + "/" + folderName,
            folderUrl: parentFolder.folderUrl + "/" + folderName,
        },
    });
    fs.mkdirSync(path.join(__dirname, createFolder.destination));
    res.redirect(url);
    next();
}

async function displayFolder(req, res) {
    const folder = await prisma.folder.findFirst({
        where: {
            folderUrl: req.originalUrl.replace("/create", ""),
        },
        include: {
            folders: true,
        },
    });
    const parentFolder = await prisma.folder.findFirst({
        where: {
            id: folder.parentId,
        },
    });
    if (!folder) {
        res.status(404).send("<h1>this file or folder don't exist");
        return;
    }
    res.render("displayFolder", { folder: folder, parentFolder: parentFolder });
}

const displayCreateFolderPage = async (req, res) => {
    const url = req.originalUrl.replace("/create", "");
    const folder = await prisma.folder.findFirst({
        where: {
            folderUrl: url,
        },
    });
    if (!folder) {
        res.status(404).send("<h1>this file don't exist");
        return;
    }
    res.render("createFolder", { folderUrl: folder.folderUrl });
};

async function displayUpdateFolderPage(req, res) {
    const folder = await prisma.folder.findFirst({
        where: {
            folderUrl: req.originalUrl.replace("/update", ""),
        },
    });
    if (!folder) {
        res.status(404).send("<h1>this file don't exist");
        return;
    }
    res.render("updateFolder", { folder });
}

const updateFolder = async (req, res) => {
    const { name } = req.body;
    // console.log("name:", name);
    const parentUrl = req.originalUrl
        .replace("/update", "")
        .replace(/\/[^\/]+$/, "");
    const oldNameFolder = /\/[^\/]+$/.exec(
        req.originalUrl.replace("/update", ""),
    )[0];
    // console.log("oldNameFolder:", oldNameFolder);
    const parentDestination =
        "../../../uploaded-file" +
        req.originalUrl
            .replace("/update", "")
            .replace(/\/[^\/]+$/, "")
            .replace("/dashboard", "");
    const destination =
        "../../../uploaded-file" +
        req.originalUrl.replace("/update", "").replace("/dashboard", "");
    const newDestination = parentDestination + "/" + name;
    // console.log("destination:", destination);
    // console.log("parentDestination:", parentDestination);
    // console.log("parentUrl:", parentUrl);
    const existFile = fs.existsSync(path.join(__dirname, destination));
    console.log(
        "path.join(__dirname, destination):",
        path.join(__dirname, destination),
    );
    console.log("existFile:", existFile);
    try {
        const folder = await prisma.folder.update({
            where: {
                folderUrl: req.originalUrl.replace("/update", ""),
            },
            data: {
                name: name,
                folderUrl: parentUrl + "/" + name,
                destination: (() => {
                    if (existFile) {
                        fs.renameSync(
                            path.join(__dirname, destination),
                            path.join(
                                __dirname,
                                parentDestination + "/" + name,
                            ),
                        );
                        console.log("file updated");
                    } else {
                        console.error("file does not updated");
                    }
                    return newDestination;
                })(),
            },
            include: {
                folders: true,
            },
        });
        console.log("folder.folderUrl:", folder.folderUrl);
        async function updateChildren(childrenFolder) {
            console.log("childrenFolder:", childrenFolder);
            // console.log('childrenFolder.folders:', childrenFolder.folders)
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
                    },
                });
                console.log("updateSubFolder:", updateSubFolder);
                updateChildren(updateSubFolder.folders);
            }
        }
        updateChildren(folder.folders);

        res.redirect(parentUrl);
    } catch (error) {
        console.error("error:", error);

        res.status(404).send("<h1>this file or folder doesn't exist</h1>");
    }
};
async function deleteFolder(req, res) {
    const url = req.originalUrl.replace("/delete", "");
    const folder = await prisma.folder.findUnique({
        where: {
            folderUrl: url,
        },
        include: {
            folders: true,
        },
    });
    const parentFolder = await prisma.folder.findUnique({
        where: {
            id: folder.parentId,
        },
    });
    async function deleteChildren(childrenFolder) {
        console.log("childrenFolder:", childrenFolder);
        if (childrenFolder.folders.length === 0) {
            const deleteFolder = await prisma.folder.delete({
                where: {
                    id: childrenFolder.id,
                },
            });
            console.log("deleteFolder:", deleteFolder);
            return;
        }
        for (const subFolder of childrenFolder.folders) {
            const subFolderChildren = await prisma.folder.findUnique({
                where: {
                    id: subFolder.id,
                },
                include: {
                    folders: true,
                },
            });

            console.log("subFolder:", subFolderChildren);
            deleteChildren(subFolderChildren);
        }
        const deleteChildrenFolder = await prisma.folder.delete({
            where: {
                id: childrenFolder.id,
            },
        });
        console.log("deleteChildrenFolder:", deleteChildrenFolder);
    }
    deleteChildren(folder);
    fs.rmdirSync(path.join(__dirname, folder.destination), { recursive: true });
    res.redirect(parentFolder.folderUrl);
}

module.exports = {
    displayDashboard,
    uploadFile,
    createFolder,
    displayFolder,
    displayCreateFolderPage,
    displayUpdateFolderPage,
    updateFolder,
    deleteFolder,
};
