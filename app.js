
require('dotenv').config()
require('./config/passport')
const express = require('express')
const path = require('node:path')
const indexRouter = require('./routes/index-router')
const signUpRouter = require('./routes/sign-up-router')
const prisma = require('./lib/prisma')
const loginRouter = require('./routes/login-router')
const session = require('express-session')
const { PrismaSessionStore } = require('@quixo3/prisma-session-store')
const passport = require('passport')
const logoutRouter = require('./routes/logout-router')
const uploadRouter = require('./routes/folders-router')
const fileRouter = require('./routes/file.router')
const { isAuth, isUnauth } = require('./config/passport')
const shareRouter = require('./routes/share-router')


const app = express();
const PORT = 3000;

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));
// app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
    store: new PrismaSessionStore(
        prisma,
        {
            checkPeriod: 1000 * 60 * 5,
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined
        }
    )
}))

app.use(passport.session())
app.use((req, res, next) => {
    res.locals.currentUser = req.user
    next()
})


app.use('/', indexRouter)
app.use('/signup', isUnauth, signUpRouter)
app.use('/login', isUnauth, loginRouter)
app.use('/logout', isAuth, logoutRouter)
app.use('/dashboard', isAuth, uploadRouter)
app.use('/file', isAuth, fileRouter)
app.use('/share', shareRouter)

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    console.log(`listen at port http://localhost:${PORT}`)
    
})