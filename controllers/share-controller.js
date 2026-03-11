const prisma = require("../lib/prisma");
const { supabase } = require("../utlis/supabase")

async function displaySharePage(req, res) {
    console.log('req:', req.host)
    const url = req.originalUrl.replace('%20', ' ').replaceAll(/\/share|\/file|\/folder/g, '');
    console.log('url:', url)
    if (req.originalUrl.match(/\/folder$/)) {
        const folder = await prisma.folder.findUnique({
            where: {
                folderUrl: url
            }
        })
        res.render('sharePage', {folder})
        return
    }
    const file = await prisma.files.findUnique({
        where: {
            fileUrl: url
        }
    })
    console.log('file:', file)
    res.render('sharePage', {file})
}


async function shareFile(req, res) {
    const url = req.originalUrl.replace('%20', ' ').replaceAll(/\/share\/dashboard|\/file/g, '');
    console.log('req:', req.hostname)
    console.log('req.originalUrl:', req.originalUrl)
    console.log('url:', url)
    const time = +req.body.time
    const { data, error } = await supabase
        .storage
        .from('folderOfFolders')
        .createSignedUrl(url, 60 * time);
    if (error) {
        console.error(error)
    }
    const file = await prisma.files.findUnique({
        where: {
            fileUrl: '/dashboard' + url
        }
    })
    console.log('data:', data)
    res.render('sharePage',{publicUrl: data.signedUrl, file})
}

async function shareFolder(req, res) {
    const url = req.originalUrl.replace('/folder', '');
    console.log(req.params)
    const {time} = req.body
    const folder = await prisma.folder.findUnique({
        where: {
            folderUrl: url.replace('/share', '')
        }
    })
    console.log('folder:', folder)
    const sharedFolder = await prisma.shareFolder.create({
        data: {
            shareUrl: url,
            duration: +time * 60 * 1000,
        }
    })
    const sharedUrl = req.host + url
    res.render('sharePage', {publicUrl: sharedUrl, folder: folder})
}

async function displayShareFolder(req, res) {
    const folderUrl = '/' + req.params[0]
    const url = '/share/' + req.params[0]
    console.log('url:', url)
    const sharedFolder = await prisma.shareFolder.findUnique({
        where: {
            shareUrl: url
        }
    })
    if (!shareFolder) {
        res.json({statusCode: '404'})
    }
    const date = new Date();
    const parsedDate = Date.parse(sharedFolder.createdAt)
    const limitDate = parsedDate + sharedFolder.duration
    if (date > limitDate) {
        res.json({statusCode: '400', message: 'expired date'})
        return
    }
    const folder = await prisma.folder.findUnique({
        where: {
            folderUrl
        },
        include: {
            folders: true,
            files: true,
        }
    })
    console.log('folder:', folder)
    res.render('displayFolder', {folder: folder, files: folder.files })
}

module.exports = {
    displaySharePage,
    shareFile,
    shareFolder,
    displayShareFolder,
}