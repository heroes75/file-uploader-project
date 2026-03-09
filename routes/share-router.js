const {Router} = require('express')
const { displaySharePage } = require('../controllers/share-controller')

const shareRouter = Router()

shareRouter.get(/\/(.*)/, displaySharePage)

module.exports = shareRouter