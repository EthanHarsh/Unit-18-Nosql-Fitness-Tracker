const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    type: {
        type: String,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
});

const Result = mongoose.model('Workout', workoutSchema);

module.exports = Result;