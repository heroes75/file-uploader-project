const { Router } = require("express");
const { displayLoginPage } = require("../controllers/login-controller");
const passport = require("passport");

const loginRouter = Router();

loginRouter.get("/", displayLoginPage);
loginRouter.post(
  "/",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/",
  }),
);

module.exports = loginRouter;
