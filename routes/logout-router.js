const { Router } = require("express");
const logoutRouter = Router();

const logoutController = require("../controllers/logout-controller");

logoutRouter.get("/", logoutController);

module.exports = logoutRouter;
