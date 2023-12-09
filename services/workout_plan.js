const WorkoutPlanModel = require('../models/workout_plan');

module.exports.getWorkoutPlans = async () => {
  try {
    const plans = await WorkoutPlanModel.find().exec();
    console.log(' service done');
    return plans;
  } catch (error) {
    console.log(error);
    throw new Error("Could not get workout plans data");
  }
};

// Add other service functions as needed
