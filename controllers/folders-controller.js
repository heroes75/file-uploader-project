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
    console.log("req.url createFolder:", req.originalUrl);
    const url = req.originalUrl.replace("/create", "");
    const parentFolder = await prisma.folder.findFirst({
        where: {
            folderUrl: url,
        },
    });
    console.log("parentFolder:", parentFolder);
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
    console.log("createFolder:", createFolder);
    fs.mkdirSync(path.join(__dirname, createFolder.destination));
    res.redirect(url);
    next();
}

async function displayFolder(req, res) {
    console.log("req:", req.originalUrl);
    const folder = await prisma.folder.findFirst({
        where: {
            folderUrl: req.originalUrl.replace("/create", ""),
        },
        include: {
            folders: true,
        },
    });
    console.log("folders:", folder);
    res.render("displayFolder", { folder: folder });
}

const displayCreateFolderPage = async (req, res) => {
    const url = req.originalUrl.replace("/create", "");
    const folder = await prisma.folder.findFirst({
        where: {
            folderUrl: url,
        },
    });
    res.render("createFolder", { folderUrl: folder.folderUrl });
};

async function displayUpdateFolderPage(req, res) {
    const folder = await prisma.folder.findFirst({
        where: {
            folderUrl: req.originalUrl.replace("/update", ""),
        },
    });
    console.log("folder:", folder);
    res.render("updateFolder", { folder });
}

const updateFolder = async (req, res) => {
    console.log('res:', res.locals)
    const { name } = req.body;
    const parentUrl = req.originalUrl.replace("/update", "").replace(/\/\w+$/, '')
    const parentDestination = '../../../uploaded-file' + req.originalUrl.replace("/update", "").replace(/\/\w+$/, '').replace('/dashboard', '')
    const destination = '../../../uploaded-file' + req.originalUrl.replace("/update", "").replace('/dashboard', '')
    console.log('destination:', destination)
    console.log('parentDestination:', parentDestination)
    console.log('parentUrl:', parentUrl)
    fs.renameSync(destination, parentDestination + '/' + name)
    const folder = await prisma.folder.update({
        where: {
            folderUrl: req.originalUrl.replace("/update", ""),
        },
        data: {
            name: name,
            folderUrl: parentUrl.parentId + '/' + name,
            destination: parentDestination + '/' + name,
        },
    });
    console.log("folder.folderUrl:", folder.folderUrl);
    res.redirect(folder.folderUrl);
};

module.exports = {
    displayDashboard,
    uploadFile,
    createFolder,
    displayFolder,
    displayCreateFolderPage,
    displayUpdateFolderPage,
    updateFolder,
};
