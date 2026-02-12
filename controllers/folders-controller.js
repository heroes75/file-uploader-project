const fs = require("node:fs");
const prisma = require("../lib/prisma");

async function displayDashboard(req, res) {
    const folders = await  prisma.folder.findFirst({
        where: {
            destination: `../../../uploaded-file/${req.user.username}`
        },
        include: {
            folders: true
        }
    })
    console.log('folders:', folders)
    res.render("dashboard", {folders: folders.folders});
}

function uploadFile(req, res) {
    res.redirect("/dashboard/" + req.user.username);
}

async function createFolder(req, res, next) {
    console.log("req.url:", req.originalUrl);
    const url = req.originalUrl.replace("/create", "")
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
            parentId: parentFolder.destination,
            destination: parentFolder.destination + "/" + folderName,
            folderUrl: parentFolder.folderUrl + "/" + folderName,
        },
    });
    console.log('createFolder:', createFolder)
    res.redirect(url)
    next();
}

async function displayFolder(req, res) {
    res.render('displayFolder')
}

module.exports = {
    displayDashboard,
    uploadFile,
    createFolder,
    displayFolder
};
