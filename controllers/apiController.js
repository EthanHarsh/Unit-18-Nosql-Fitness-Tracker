const catchAsync = require('./../utils/catchAsync');
const Workout = require('./../models/workoutModel');

exports.getWorkouts = catchAsync(async (req, res, next) => {
    const workouts = await Workout.find();

    res.status(200).json({
        status: 'success',
        result_num: workouts.length,
        data: workouts
    })
})