const { getMenuItems, createMenuItem, getMenuItemById, updateMenuItem, deleteMenuItem } = require('../controllers/menuitemController')

const menuItemRouter = require('express').Router()


menuItemRouter.post('/createMenuItem', createMenuItem)
menuItemRouter.get('/getMenutem', getMenuItems)
menuItemRouter.put('/updateMenuItem', updateMenuItem)
menuItemRouter.delete('/deleteMenuItem',deleteMenuItem)


module.exports = menuItemRouter