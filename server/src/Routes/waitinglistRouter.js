const { createWaitingListEntry, getWaitingList, updateWaitingList, deleteWaitingListEntry } = require('../controllers/waitinglistController')

const waitinglistRouter = require('express').Router()




waitinglistRouter.post('createWitingListEntry/',createWaitingListEntry)
waitinglistRouter.get('/getWaitingList',getWaitingList)
waitinglistRouter.put('/updateWaitingList',updateWaitingList)
waitinglistRouter.delete('/deleteWaitingListEntry',deleteWaitingListEntry)



module.exports = waitinglistRouter