const { Router } = require('express');
const workoutPlanController = require('../controllers/workout_plan');
const workoutPlanRouter = Router();

workoutPlanRouter.get('/getworkplan', workoutPlanController.get_workout_plans);

// Add other routes as needed

module.exports = workoutPlanRouter;
