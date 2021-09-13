const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    day: Date,
    exercises: Array
});

const Result = mongoose.model('Workout', workoutSchema);

module.exports = Result;