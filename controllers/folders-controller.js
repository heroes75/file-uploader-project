// const multer = require("multer");
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, `/home/emmanuel75/uploaded-file/${req.user.username}`);
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//         cb(null, file.fieldname + "-" + uniqueSuffix);
//     },
// });

// const upload = multer({storage: storage});

function displayDashboard(req, res) {
    res.render("dashboard");
}

function uploadFile(req, res) {
    // upload.single('fileBackup')
    // console.log('upload:', upload)
    res.redirect('/dashboard')
}



module.exports = {
    displayDashboard,
    uploadFile
};
