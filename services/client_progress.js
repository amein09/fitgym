

 

const client_progress_model = require('../models/client_progress');

module.exports.get_client_progress = async () => {
    try {
        const progress = await client_progress_model.find({ client_id: "2000" }).exec();
        console.log('this is service');
        console.log(progress);
        return progress;
    } catch (error) {
        console.log(error);
        throw new Error("Could not get client progress data");
    }
};




module.exports.add_progress = async (progress_info) => {
    try {
        const progress = new clientProgressModel({
            client_id: progress_info.client_id,
            date: progress_info.date,
            exercise_data: progress_info.exercise_data,
            diet_data: progress_info.diet_data,
            total_burnout: progress_info.total_burnout
        });
        console.log("Progress is made");
        console.log(progress_info.client_id);
        const created_progress = await progress.save();
        return created_progress;
    } catch (err) {
        console.log('Error in adding new progress (services)');
        console.log(err);
        throw err;  // Rethrow the error to handle it at a higher level if needed
    }
}
