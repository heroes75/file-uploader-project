const { Router } = require("express");
const {
    displayFileInfo,
    downloadFile,
    deleteFile,
} = require("../controllers/file-controller");

const fileRouter = Router();

fileRouter.post(/\/(.*)\/download/, downloadFile);
fileRouter.post(/\/(.*)\/delete/, deleteFile);
fileRouter.get(/\/(.*)/, displayFileInfo);

module.exports = fileRouter;
