const { getMenuItems, createMenuItem, getMenuItemById, updateMenuItem, deleteMenuItem } = require('../controllers/menuitemController')
const { authorizeRoles } = require('../Middlewares/authMiddleware')

const menuItemRouter = require('express').Router()


menuItemRouter.post('/createMenuItem',authorizeRoles('admin'), createMenuItem)
menuItemRouter.get('/getMenutem', getMenuItems)
menuItemRouter.put('/updateMenuItem', updateMenuItem)
menuItemRouter.delete('/deleteMenuItem',deleteMenuItem)


module.exports = menuItemRouter