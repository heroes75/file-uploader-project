const { body, matchedData, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const prisma = require('../lib/prisma')
const fs = require('node:fs')
const path = require('node:path')

const isNotEmpty = ' must not be empty'

exports.displaysignUpPage = (req, res) => {
    res.render('signUpPage')
}

const validSignUp = [
    body('username')
        .trim()
        .notEmpty().withMessage('your username' + isNotEmpty)
        .isAlphanumeric().withMessage('your username must only contains alphanumeric characters'),
    body('password')
        .trim()
        .notEmpty().withMessage('your password' + isNotEmpty),
    body('confirmPassword')
        .trim()
        .custom((value, {req}) => {
            return value === req.body.password
        }).withMessage('both password must be equal'),
]

exports.signUpController = [
    validSignUp,
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            res.render('signUpPage', {errors: errors.errors})
            return
        }
        const {username, password} = matchedData(req);
        const hash = await bcrypt.hash(password, 10)

        const userCreate = await prisma.user.create({
            data: {
                username,
                password: hash
            },
        })
        const destination = `../../../uploaded-file/${userCreate.username}`
        fs.mkdirSync(path.join(__dirname, destination))
        const createFirstFolder = await prisma.folder.create({
            data : {
                userId : userCreate.id,
                folderUrl: '/dashboard/' + userCreate.username,
                destination: destination,
                name: `${userCreate.username}`
            }
        })
        console.log('userCreate:', userCreate)
        console.log('createFirstFolder:', createFirstFolder)
        res.redirect('/')
    }

]