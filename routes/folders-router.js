const {Router} = require('express')
const { displayDashboard, uploadFile, createFolder, displayFolder, displayCreateFolderPage, displayUpdateFolderPage, updateFolder, deleteFolder, validNameFolder, validUpdateFolder } = require('../controllers/folders-controller')
const uploadRouter = Router()
const fs = require('fs')
const path = require('node:path')


const multer = require("multer");
const prisma = require('../lib/prisma')
// const storage = multer.diskStorage({
//     destination: async function (req, file, cb) {
//         console.log('file:', file)
//         console.log('req.originalUrl multer:', req.originalUrl.replace('/upload', ''))
//         const folder = await prisma.folder.findFirst({
//             where: {
//                 folderUrl: req.originalUrl.replace('/upload', '').replaceAll('%20', ' ')
//             }
//         })
//         console.log('folder:', folder)
//         const realDestination = path.join(__dirname,  folder.destination)
//         const folderExists = fs.existsSync(realDestination)
//         console.log('folderExists:', folderExists)
//         if(!folderExists) {
//             fs.mkdirSync(realDestination, err => {
//                 if(err) return console.error(err)
//                 console.log('Directory created successfully!');
//             })
//         }
//         cb(null, realDestination)
//     },
//     filename: function (req, file, cb) {
//         const ext = '.' + file.mimetype.replace(/^([^\/]+)\//, "")
//         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//         cb(null, file.originalname.replace(/[^\x00-\x7F]+/g, '') + "-" + uniqueSuffix + ext);
//     },
// });

const storage = multer.memoryStorage()

const upload = multer({storage: storage});


uploadRouter.get('/:id', displayDashboard)
// must add uploadFile function
// uploadRouter.post('/:id/upload', upload.single('fileBackup'), uploadFile)
uploadRouter.get('/:id/create',  displayCreateFolderPage)
// uploadRouter.post('/:id/create',  createFolder)
// uploadRouter.get(/(?:\/:id){2,}/,  createFolder)
uploadRouter.get(/\/(.*)\/create$/,  displayCreateFolderPage)
uploadRouter.post(/\/(.*)\/create$/, validNameFolder, createFolder)
uploadRouter.get(/\/(.*)\/update$/,  displayUpdateFolderPage)
uploadRouter.post(/\/(.*)\/update$/, validUpdateFolder, updateFolder)
uploadRouter.post(/\/(.*)\/delete$/,  deleteFolder)
uploadRouter.post(/\/(.*)\/upload$/,  upload.single('fileBackup'), uploadFile)
uploadRouter.get(/\/(.*)$/,  displayFolder)

module.exports = uploadRouter