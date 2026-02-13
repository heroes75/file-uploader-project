const {Router} = require('express')
const { displayDashboard, uploadFile, createFolder, displayFolder, displayCreateFolderPage, displayUpdateFolderPage, updateFolder } = require('../controllers/folders-controller')
const uploadRouter = Router()
const fs = require('fs')
const path = require('node:path')


const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const folderExists = fs.existsSync(path.join(__dirname,  `../../../uploaded-file/${req.user.username}`))
        console.log('folderExists:', folderExists)
        if(!folderExists) {
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


uploadRouter.get('/:id',  displayDashboard)
// must add uploadFile function
uploadRouter.post('/upload', upload.single('fileBackup'), uploadFile)
uploadRouter.get('/:id/create',  displayCreateFolderPage)
uploadRouter.post('/:id/create',  createFolder)
// uploadRouter.get(/(?:\/:id){2,}/,  createFolder)
uploadRouter.get(/\/(.*)\/create$/,  displayCreateFolderPage)
uploadRouter.post(/\/(.*)\/create$/,  createFolder)
uploadRouter.get(/\/(.*)\/update$/,  displayUpdateFolderPage)
uploadRouter.post(/\/(.*)\/update$/,  updateFolder)
uploadRouter.get(/\/(.*)$/,  displayFolder)

module.exports = uploadRouter