const {login} = require('../controllers/authControllers')

const authRouter = require('express').Router()


authRouter.post('/login', login)



module.exports = authRouter




