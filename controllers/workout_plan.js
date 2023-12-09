const workoutPlanService = require('../services/workout_plan');

module.exports.get_workout_plans = async (req, res) => {
  try {
    const plans = await workoutPlanService.getWorkoutPlans();
    console.log(' controller done');
    res.send({ plans });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Add other controller functions as needed
