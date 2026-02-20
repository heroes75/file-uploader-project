const prisma = require("../lib/prisma")
const path = require('node:path')
const fs = require('node:fs')
const { supabase } = require("../utlis/supabase")

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
    res.render('displayFileInfo', {file, parentFolder})
}

async function downloadFile(req, res) {
    const file = await prisma.files.findUnique({
        where: {
            fileUrl: req.originalUrl.replace('/file', '').replace('/download', '').replace(/%(?:20)?/g, ' ')
        }
    })
    console.log('file.destinationId:', file.destinationId)
    const {data} = supabase.storage.from('folderOfFolders').getPublicUrl(file.destinationId, { download: true})
    console.log('data:', data)
    // res.download(data.publicUrl, file.name)
    res.redirect('/file' + file.fileUrl)
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