const prisma = require("../lib/prisma");
const { supabase } = require("../utlis/supabase");

async function displayFileInfo(req, res) {
    const file = await prisma.files.findUnique({
        where: {
            fileUrl: req.originalUrl
                .replace("/file", "")
                .replace(/%(?:20)?/g, " "),
        },
    });
    const parentFolder = await prisma.folder.findUnique({
        where: {
            id: file.folderId,
        },
    });
    res.render("displayFileInfo", { file, parentFolder });
}

async function downloadFile(req, res) {
    const file = await prisma.files.findUnique({
        where: {
            fileUrl: req.originalUrl
                .replace("/file", "")
                .replace("/download", "")
                .replace(/%(?:20)?/g, " "),
        },
    });
    const { data } = supabase.storage
        .from("folderOfFolders")
        .getPublicUrl(file.destinationId, { download: true });
    res.redirect(data.publicUrl);
}

async function deleteFile(req, res) {
    const sanitizedUrl = req.originalUrl
        .replace("/file", "")
        .replace("/delete", "")
        .replace(/%(?:20)?/g, " ");
    const file = await prisma.files.findUnique({
        where: {
            fileUrl: sanitizedUrl,
        },
    });
    const deleteSharedFiles = await prisma.shareFile.deleteMany({
        where: {
            fileId: file.id,
        },
    });
    const deletedFile = await prisma.files.delete({
        where: {
            fileUrl: (() => {
                const { data, error } = supabase.storage
                    .from("folderOfFolders")
                    .remove(file.destinationId);
                if (error) {
                    console.error(error);
                }
                return file.fileUrl;
            })(),
        },
    });
    const folder = await prisma.folder.findUnique({
        where: {
            id: deletedFile.folderId,
        },
    });
    res.redirect(folder.folderUrl);
}

module.exports = {
    displayFileInfo,
    downloadFile,
    deleteFile,
};
