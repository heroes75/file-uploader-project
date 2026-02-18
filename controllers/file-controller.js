const prisma = require("../lib/prisma")
const path = require('node:path')
const fs = require('node:fs')

async function displayFileInfo(req, res) {
    const file = await prisma.files.findUnique({
        where: {
            fileUrl: req.originalUrl.replace('/file', '').replace(/%(?:20)?/g, ' ')
        }
    })
    const parentFolder = await prisma.folder.findUnique({
        where: {
            id: file.folderId
        }
    })
    console.log('req.originalUrl.replace("/file", ).replace(/%(?:20)?/g, " " ):', req.originalUrl.replace("/file", ).replace(/%(?:20)?/g, ' '))
    console.log('req.originalUrl:', req.originalUrl)
    console.log('file:', file)
    res.render('displayFileInfo', {file, parentFolder})
}

async function downloadFile(req, res) {
    const file = await prisma.files.findUnique({
        where: {
            fileUrl: req.originalUrl.replace('/file', '').replace('/download', '').replace(/%(?:20)?/g, ' ')
        }
    })
    res.download(path.join(__dirname, file.destinationId), file.name)
}


async function deleteFile(req, res) {
    console.log('originalUrl:', req.originalUrl)
    const sanitizedUrl = req.originalUrl.replace('/file', '').replace('/delete', '').replace(/%(?:20)?/g, ' ')
    const deletedFile = await prisma.files.delete({
        where: {
            fileUrl: sanitizedUrl
        }
    })
    const folder = await prisma.folder.findUnique({
        where: {
            id: deletedFile.folderId
        }
        
    })
    console.log('deletedFile:', deletedFile)
    fs.rmSync(path.join(__dirname, deletedFile.destinationId))
    res.redirect(folder.folderUrl)
}


module.exports = {
    displayFileInfo,
    downloadFile,
    deleteFile,
}