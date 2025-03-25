const { getAllCustomers, updateCustomer, deleteCustomer, registerCustomer } = require('../controllers/customerController')

const customerRouter = require('express').Router()



customerRouter.post('/registerCustomer', registerCustomer)
customerRouter.get('/getAllCustomers',getAllCustomers)
customerRouter.put('/updateCustomer',updateCustomer)
customerRouter.delete('/deleteCustomer',deleteCustomer)



module.exports = customerRouter