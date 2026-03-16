const passport = require("passport");
const prisma = require("../lib/prisma");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const verifyCallback = async (username, password, done) => {
    const user = await prisma.user.findFirst({
        where: {
            username: username,
        },
    });

    if (!user) {
        return done(null, false, { message: "username is not correct" });
    }

    const compareHash = await bcrypt.compare(password, user.password);

    if (!compareHash) {
        return done(null, false, { message: "your password is incorrect" });
    }

    return done(null, user);
};

const strategy = new LocalStrategy(verifyCallback);
passport.use(strategy);

passport.serializeUser((username, done) => {
    return done(null, username.username);
});

passport.deserializeUser(async (username, done) => {
    const getUserById = await prisma.user.findUnique({
        where: {
            username: username,
        },
    });
    return done(null, getUserById);
});

const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
        return;
    }
    res.redirect("/login");
};
const isUnauth = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
        return;
    }
    res.redirect("/");
};
module.exports = {
    isAuth,
    isUnauth,
};
