const apiRouter = require('.')
const { createOrder, getOrders, updateOrder, deleteOrder } = require('../controllers/orderController')

const orderRouter = require('express').Router()


orderRouter.post('/createorder',createOrder)
orderRouter.get('/getorders',getOrders)
orderRouter.put('/updateorder',updateOrder)
orderRouter.delete('/deleteorder',deleteOrder)

module.exports = orderRouter
