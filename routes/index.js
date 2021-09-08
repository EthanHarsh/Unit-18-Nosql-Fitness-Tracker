const express = require('express');
const router = express.Router();
const frontEndRoutes = require('./frontend');

router.use('/', frontEndRoutes);

module.exports = router;