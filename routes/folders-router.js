const {Router} = require('express')
const { displayDashboard, uploadFile } = require('../controllers/folders-controller')
const uploadRouter = Router()
const fs = require('fs')
const path = require('node:path')


const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if(!fs.existsSync(`../../../uploaded-file/${req.user.username}`)) {
            fs.mkdirSync(path.join(__dirname,  `../../../uploaded-file/${req.user.username}`), err => {
                if(err) return console.error(err)
                console.log('Directory created successfully!');
            })
        }
        cb(null, `/home/emmanuel75/uploaded-file/${req.user.username}`)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

const upload = multer({storage: storage});


uploadRouter.get('/',  displayDashboard)
// must add uploadFile function
uploadRouter.post('/upload', upload.single('fileBackup'), uploadFile)
uploadRouter.get('/create',  (req, res) => { res.render('createFolder')})

module.exports = uploadRouter