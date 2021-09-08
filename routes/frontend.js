const express = require('express');
const router = express.Router();

router
    .route('/')
    .get((req, res) => res.sendFile('/home/ethanharsh/homework/Unit-18-Nosql-Fitness-Tracker/public/index.html'));

router
    .route('/exercise')
    .get((req, res) => res.sendFile('/home/ethanharsh/homework/Unit-18-Nosql-Fitness-Tracker/public/exercise.html'));

router
    .route('/stats')
    .get((req, res) => res.sendFile('/home/ethanharsh/homework/Unit-18-Nosql-Fitness-Tracker/public/stats.html'));

module.exports = router;