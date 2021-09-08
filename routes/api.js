const express = require('express');
const router = express.Router();
const apiController = require('./../controllers/apiController')

router
    .route('/workouts')
    .get(apiController.getWorkouts)



module.exports = router;