const {Router} = require('express')
const { displayDashboard, uploadFile } = require('../controllers/upload-controller')
const uploadRouter = Router()


const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "/home/emmanuel75/uploaded-file");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + '.' + file.encoding);
    },
});

const upload = multer({storage: storage});



uploadRouter.get('/', displayDashboard)
uploadRouter.post('/upload', upload.single('fileBackup'))

module.exports = uploadRouter