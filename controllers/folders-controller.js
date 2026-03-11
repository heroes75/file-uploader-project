const fs = require("node:fs");
const prisma = require("../lib/prisma");
const path = require("node:path");
const { matchedData, validationResult, body } = require("express-validator");
const { supabase } = require("../utlis/supabase");


const validFile = body('fileBackup')
    .custom((value, {req}) => {
        console.log('value:', value)
        const fileSize = req.file.size;
        console.log('fileSize:', fileSize)
        const _45MB = 47185920
        console.log('_45MB:', _45MB)
        const isTooHeavy = fileSize  > _45MB
        console.log('isTooHeavy:', isTooHeavy)
        if (isTooHeavy) {
            throw new Error('Too heavy')
        }
        return true
    }).withMessage('your file must not overflow 45 MB')


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
        console.log("value:", value);
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
        console.log("folderParent:", folderParent);
        const existingFolder =
            folderParent.folders.map((folder) => folder.name).includes(value) &&
            value !== folder.name;
        console.log("existingFolder:", existingFolder);
        if (existingFolder) {
            throw new Error("this name is already taken in this folder");
        }
    })
    .withMessage("this name is already taken in this folder");



async function displayDashboard(req, res) {
    const folders = await prisma.folder.findFirst({
        where: {
            destination: `${req.user.username}`,
        },
        include: {
            folders: true,
            files: true,
        },
    });
    // console.log("folders of dashboard:", folders);
    res.render("dashboard", {
        folders: folders.folders,
        files: folders.files,
        folderUrl: folders.folderUrl,
    });
}


async function uploadFile(req, res, next) {
    // console.log('upload start..')
    console.log('req:', req.files)
    const errors = validationResult(req)
    
    const ext = '.' + req.file.mimetype.replace(/^([^\/]+)\//, "")
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    req.file.name = req.file.originalname.replace(/[^\x00-\x7F]+/g, '') + "-" + uniqueSuffix + ext
    console.log("req.file", req.file);
    const file = req.file;
    const buffer = req.file.buffer;
    const url = req.originalUrl.replace('/upload', '').replaceAll('%20', ' ')
    const name = req.file.name;
    // console.log('name:', name)
    const folder = await prisma.folder.findUnique({
        where: {
            folderUrl: url,
        },
        include: {
            folders: true,
            files: true
        }
    });
    const parentFolder = await prisma.folder.findUnique({
        where: {
            id: folder.parentId || ''
        }
    })
    console.log('folder:', folder)
    console.log('parentFolder:', parentFolder)
    if (!errors.isEmpty()) {
        res.render('displayFolder', {folder: folder, parentFolder: parentFolder, files: folder.files, errors: errors.errors})
        return
    }
    console.log('folder:', folder)
    const createFile = await prisma.files.create({
        data: {
            folderId: folder.id,
            fileUrl: url + '/' + name,
            destinationId: folder.destination + '/' + name,
            name: name,
            originalName: file.originalname,
            size: file.size
        },
    });
    console.log("createFile:", createFile);
    const { data, error } = await supabase.storage
        .from("folderOfFolders")
        .upload(createFile.destinationId, buffer, { contentType: ext});
    if (error) {
        console.error(error);
    } else {
        console.log('data', data);
    }
    // console.log('upload end..')
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
    const existingFolder = await prisma.folder.findUnique({
        where: { destination: destination },
    });
    console.log("existingFolder:", existingFolder);
    if (existingFolder) {
        return res
            .status(400)
            .json({ error: "Un dossier avec ce nom existe déjà ici." });
    }

    const createFolder = await prisma.folder.create({
        data: {
            userId: +req.user.id,
            name: folderName,
            parentId: parentFolder.id,
            folderUrl: parentFolder.folderUrl + "/" + folderName,
            destination,
        },
    });
    console.log("createFolder:", createFolder);
    // fs.mkdirSync(path.join(__dirname, createFolder.destination));
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
    console.log('folder:', folder)
    console.log('folderurl:', req.originalUrl
                .replace(/\/create/, "")
                .replace("/upload", "")
                .replace(/$\//, "")
                .replaceAll("%20", " "),)
        const parentFolder = await prisma.folder.findFirst({
            where: {
                id: folder.parentId || '',
            },
        });
    
    if (!folder) {
        res.status(404).send("<h1>this file or folder don't exist</h1>");
        return;
    }
    res.render("displayFolder", { folder: folder, parentFolder: parentFolder, files: folder.files });
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
    res.render("createFolder", { folderUrl: folder.folderUrl, name: folder.name });
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
    console.log("errors:", errors.errors);
    const findFolder = await prisma.folder.findUnique({
        where: {
            folderUrl: req.originalUrl
                .replace("/update", "")
                .replaceAll("%20", " "),
        },
    });
    console.log("findFolder:", findFolder);
    if (!errors.isEmpty()) {
        res.render("updateFolder", {
            errors: errors.errors,
            folder: findFolder,
        });
        return;
    }
    // console.log("name:", name);
    const { name } = matchedData(req);

    const parentUrl = req.originalUrl
        .replace("/update", "")
        .replace(/\/[^\/]+$/, "")
        .replaceAll("%20", " ");
    const oldNameFolder = /\/[^\/]+$/.exec(
        req.originalUrl.replace("/update", "").replaceAll("%20", " "),
    )[0];
    // console.log("oldNameFolder:", oldNameFolder);
    const parentDestination =
        req.originalUrl
            .replace("/update", "")
            .replace(/\/[^\/]+$/, "")
            .replace("/dashboard/", "")
            .replaceAll("%20", " ");
    // const destination =
    //     req.originalUrl
    //         .replace("/update", "")
    //         .replace("/dashboard", "")
    //         .replaceAll("%20", " ");
    const newDestination = parentDestination + "/" + name;
    // const existFile = fs.existsSync(path.join(__dirname, destination));
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
        console.log("folder.folderUrl:", folder.folderUrl);

        async function updateChildren(childrenFolder, childrenFile) {
            console.log("childrenFolder:", childrenFolder);
            // console.log('childrenFolder.folders:', childrenFolder.folders)
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
                    console.log('file.destinationId:', file.destinationId)
                    console.log('updatedFile.destinationId:', updatedFile.destinationId)
                    const {data, error} = await supabase.storage.from('folderOfFolders').move(file.destinationId, updatedFile.destinationId)
                    if (!error) {
                        console.log('data update', data)
                    } else {
                        console.error(error)
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
                console.log("updateSubFolder:", updateSubFolder);
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
            folders: true,
            files: true,
        },
    });
    const parentFolder = await prisma.folder.findUnique({
        where: {
            id: folder.parentId,
        },
    });
    async function deleteChildren(childrenFolder) {
        console.log("childrenFolder:", childrenFolder);
        if (childrenFolder.files.length !== 0) {

            for (const file of childrenFolder.files) {
                const deletedFile = await prisma.files.delete({
                    where: {
                        id: file.id,
                    },
                });
            }
            const {data, error} = await supabase.storage.from('folderOfFolders').remove(childrenFolder.files.map(file => file.destinationId))
            if (error) {
                console.error(error)
            }
        }

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
                    files: true,
                },
            });
            console.log("subFolder:", subFolderChildren);
            deleteChildren(subFolderChildren);
        }
        const deletedAllChildrenFolder = await prisma.folder.delete({
            where: {
                id: childrenFolder.id,
            },
        });
        console.log("deletedAllChildrenFolder:", deletedAllChildrenFolder);
    }
    deleteChildren(folder);
    // fs.rmdirSync(path.join(__dirname, folder.destination), { recursive: true });
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
    validNameFolder,
    validUpdateFolder,
    validFile
};
