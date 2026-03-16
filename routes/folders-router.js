const { Router } = require("express");
const {
    uploadFile,
    createFolder,
    displayFolder,
    displayCreateFolderPage,
    displayUpdateFolderPage,
    updateFolder,
    deleteFolder,
    validNameFolder,
    validUpdateFolder,
    validFile,
} = require("../controllers/folders-controller");

const uploadRouter = Router();
const multer = require("multer");
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
});

uploadRouter.get(/\/(.*)\/create$/, displayCreateFolderPage);
uploadRouter.post(/\/(.*)\/create$/, validNameFolder, createFolder);
uploadRouter.get(/\/(.*)\/update$/, displayUpdateFolderPage);
uploadRouter.post(/\/(.*)\/update$/, validUpdateFolder, updateFolder);
uploadRouter.post(/\/(.*)\/delete$/, deleteFolder);
uploadRouter.get(/\/(.*)$/, displayFolder);
uploadRouter.post(
    /\/(.*)$/,
    upload.single("fileBackup"),
    validFile,
    uploadFile,
);

module.exports = uploadRouter;
