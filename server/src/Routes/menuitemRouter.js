const { getMenuItems, createMenuItem, getMenuItemById, updateMenuItem, deleteMenuItem } = require('../controllers/menuitemController')

const menuitemRouter = require('express').Router()


menuitemRouter.post('/createMenuItem', createMenuItem)
menuitemRouter.get('/getMenutem', getMenuItems)
menuitemRouter.put('/updateMenuItem', updateMenuItem)
menuitemRouter.delete('/deleteMenuItem',deleteMenuItem)


module.exports = menuitemRouter