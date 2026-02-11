
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


const app = express()


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
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

app.use(express.urlencoded({extended: true}))
app.use(passport.session())
app.use((req, res, next) => {
    res.locals.currentUser = req.user
    console.log('req.locals.currentUser :', res.locals.currentUser )
    next()
})


app.use('/', indexRouter)
app.use('/signup', signUpRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/dashboard', uploadRouter)

app.listen(3000, (err) => {
    if (err) {
        console.error(err)
    }

    // async function main(id) {
    //     const user = await prisma.user.findUnique({
    //     where: {
    //         id: id
    //     }
    // })
    //     console.log('user:', user)

    // } 

    // main(1).then(async () => {
    //     await prisma.$disconnect()
    // }).catch(async e => {
    //     console.error( e)
    //     await prisma.$disconnect()
    // }) 
    console.log('listen at port http://localhost:3000')
    
})