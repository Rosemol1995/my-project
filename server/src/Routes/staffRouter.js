const { getAllCustomers } = require('../controllers/customerController')
const { createStaff, getAllStaff, updateStaff, deleteStaff } = require('../controllers/staffController')
const { updateSearchIndex } = require('../Models/UserModel')

const staffRouter = require('express').Router()


staffRouter.post('/createStaff',createStaff)
staffRouter.get('/getAllstaff',getAllStaff)
staffRouter.put('/updateStaff',updateStaff)
staffRouter.delete('/deleteStaff',deleteStaff)


module.exports = staffRouter