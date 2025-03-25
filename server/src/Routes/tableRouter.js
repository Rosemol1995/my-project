const { createTable, getAllTables, updateTable, deleteTable } = require('../controllers/tableController')

const tableRouter = require('express').Router()



tableRouter.post('/createTable', createTable)
tableRouter.get('/getAllTables', getAllTables)
tableRouter.put('/updateTable',updateTable )
tableRouter.delete('/deleteTable',deleteTable)

module.exports = tableRouter