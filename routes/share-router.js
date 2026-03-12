const {Router} = require('express')
const { displaySharePage, shareFile, shareFolder, displayShareFolder } = require('../controllers/share-controller')

const shareRouter = Router()

shareRouter.get(/\/(.*)\/file$/, displaySharePage)
shareRouter.get(/\/(.*)\/folder$/, displaySharePage)
shareRouter.post(/\/(.*)\/folder$/, shareFolder)
shareRouter.post(/\/(.*)\/file$/, shareFile)
shareRouter.get(/\/(.*)\/(?<hash>.*)$/, displayShareFolder)

module.exports = shareRouter