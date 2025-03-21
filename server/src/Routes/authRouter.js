const apiRouter = require('.')
const { login } = require('../controllers/authControllers')


const authRouter = require('express').Router()


apiRouter.post('/login',login )



module.exports = authRouter




