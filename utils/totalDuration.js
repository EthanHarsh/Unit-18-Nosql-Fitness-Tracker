exports.totalDuration = (workouts) => {
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
        //console.log(ex)
        data.push(ex);
    }
    return data
}
