const catchAsync = require('./../utils/catchAsync');
const Workout = require('./../models/workoutModel');

exports.getWorkouts = catchAsync(async (req, res, next) => {
    const data = await Workout.find();

    res.status(200).json({
        data
    })
})

exports.getWorkoutRange = catchAsync(async (req, res, next) => {
    const workouts = await Workout.find().sort([['day', -1]]).limit(7);
    console.log('workoutRangne')
    let x = 0;
    let data = [];
    for (session of workouts) {
        let totalDuration = 0;
        let ex = JSON.stringify(session)
        ex = JSON.parse(ex);
        //console.log(ex.exercises[0].duration)

        for (tech of ex.exercises) {
            //console.log(tech.duration);
            totalDuration = totalDuration + tech.duration
        }
        ex.totalDuration = totalDuration;
        console.log(ex)
        data.push(ex);
        x++;
    }
    res.status(200).json({
        data
    })
})

exports.createWorkout = catchAsync(async (req, res, next) => {
    let workout = {
        day: new Date(new Date().setDate(new Date().getDate())),
        excercises: []
    }
    //console.log(workout)
    const workouts = await Workout.create(workout);
    //console.log('createWorkout');

    res.status(200).json({
        data: workouts
    })
})

exports.idWorkout = catchAsync(async (req, res, next) => {
    console.log(req.body);
    let ex = await Workout.findById(req.params.id);
    //console.log(ex.exercises)
    ex.exercises.push(req.body);
    console.log(ex);
    let data = await Workout.findByIdAndUpdate(req.params.id, ex);

    data = ex;
    //console.log(data);
    res.status(200).json({
        ex
    })
})