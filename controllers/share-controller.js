const prisma = require("../lib/prisma");

async function displaySharePage(req, res) {
    const url = req.originalUrl.replace('%20', ' ').replace('/share/dashboard', '');
    const file = await prisma.findUnique({
        where: {
            fileUrl: url
        }
    })
    res.render('sharePage', {file})
}

async function shareFile(req, res) {
    const url = req.originalUrl.replace('%20', ' ').replace('/share/dashboard', '');
    const { data, error } = await supabase
        .storage
        .from('avatars')
        .createSignedUrl('folder/avatar1.png', 60);
    res.redirect(data)

}

module.exports = {
    displaySharePage,
}