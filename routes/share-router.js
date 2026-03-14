const { Router } = require("express");
const {
  displaySharePage,
  shareFile,
  shareFolder,
  displayShareFolder,
  displayShareFile,
  downloadSharedFile,
} = require("../controllers/share-controller");

const shareRouter = Router();

shareRouter.post(/\/(.*)\/(?<hash>.*)\/file\/download$/, downloadSharedFile);
shareRouter.get(/\/(.*)\/(?<hash>.*)\/file$/, displayShareFile);
shareRouter.get(/\/(.*)\/share-file$/, displaySharePage);
shareRouter.get(/\/(.*)\/folder$/, displaySharePage);
shareRouter.post(/\/(.*)\/folder$/, shareFolder);
shareRouter.post(/\/(.*)\/share-file$/, shareFile);
shareRouter.get(/\/(.*)\/(?<hash>.*)$/, displayShareFolder);

module.exports = shareRouter;
