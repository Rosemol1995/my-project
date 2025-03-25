const { addToCart, getCart, updateCartItem, clearCart } = require('../controllers/cartController')

const cartRouter = require('express').Router()



cartRouter.post('/addTocart', addToCart)
cartRouter.get('/getCart', getCart)
cartRouter.put('/updateCartitem', updateCartItem)
cartRouter.delete('/clearCart', clearCart)


module.exports = cartRouter

