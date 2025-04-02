const { verify } = require('jsonwebtoken')
const customerRouter = require('./customerRouter')
const staffRouter = require('./staffRouter')
const cartRouter = require('./cartRouter')
const orderRouter = require('./orderRouter')
const reservationRouter = require('./reservationRouter')
const tableRouter = require('./tableRouter')
const waitinglistRouter = require('./waitinglistRouter')
const { authenticateUser } = require('../Middlewares/authMiddleware')
const adminRouter = require('./adminRouter')
const authRouter = require('./authRouter')
const deliveryRouter = require('./deliveryRouter')
const menuItemRouter = require('./menuitemRouter')
const { registerCustomer } = require('../controllers/customerController')
const { logout } = require('../controllers/authControllers')

const apiRouter = require('express').Router()


apiRouter.use('/customer',authenticateUser,customerRouter)
apiRouter.use('/admin',adminRouter)
apiRouter.use('/staff',authenticateUser,staffRouter)
apiRouter.use('/cart',authenticateUser,cartRouter)
apiRouter.use('/delivery',authenticateUser,deliveryRouter)
apiRouter.use('/menuitem',authenticateUser,menuItemRouter)
apiRouter.use('/order',authenticateUser,orderRouter)
apiRouter.use('/reservation',authenticateUser,reservationRouter)
apiRouter.use('/table',authenticateUser,tableRouter)
apiRouter.use('/waitinglist',authenticateUser,waitinglistRouter)
apiRouter.use('/auth',authRouter)
// apiRouter.use('/auth/verify',verifyUser)
apiRouter.use('/register', registerCustomer)
apiRouter.use('/logout',logout)



module.exports = apiRouter
