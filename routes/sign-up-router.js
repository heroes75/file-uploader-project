const { Router } = require("express");
const signUpController = require("../controllers/sign-up-controller");
const signUpRouter = Router();

signUpRouter.get("/", signUpController.displaysignUpPage);
signUpRouter.post("/", signUpController.signUpController);

module.exports = signUpRouter;
