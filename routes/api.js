const express = require('express');
const router = express.Router();
const apiController = require('./../controllers/apiController')

router
    .route('/workouts')
    .get(apiController.getWorkouts)

router
    .route('/workouts')
    .post(apiController.createWorkout)

router
    .route('/workouts/range')
    .get(apiController.getWorkoutRange)

router
    .route('/workouts/:id')
    .put(apiController.idWorkout)





module.exports = router;