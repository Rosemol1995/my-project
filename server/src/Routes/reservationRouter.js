const { createReservation, getReservations, deleteReservation, updateReservation } = require('../controllers/reservationController')

const reservationRouter = require('express').Router()




reservationRouter.post('/createReservation',createReservation)
reservationRouter.get('/getReservations',getReservations)
reservationRouter.put('/updateReservation',updateReservation)
reservationRouter.delete('/deleteReservation',deleteReservation)


module.exports = reservationRouter
