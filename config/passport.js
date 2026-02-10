const passport = require('passport')
const prisma = require('../lib/prisma');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')
console.log('LocalStrategy:', LocalStrategy)

const verifyCallback = async (username, password, done) => {
    const user = await prisma.user.findFirst({
        where: {
            username: username
        }
    })

    console.log('user passport:', user)
    if (!user) {
        return done(null, false, {message: 'username is not correct'})
    }

    const compareHash = await bcrypt.compare(password, user.password)
    console.log('compareHash:', compareHash)

    if (!compareHash) {
        return done(null, false, {message: 'your password is incorrect'})
    }

    return done(null, user)
}

const strategy = new LocalStrategy(verifyCallback)
passport.use(strategy)

passport.serializeUser((user, done) => {
    return done(null, user.id)
})

passport.deserializeUser( async (userId, done) => {
    const getUserById = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
    return done(null, getUserById)
})



