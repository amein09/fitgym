const { Router } = require('express');
const client_progress_controller = require('../controllers/client_progress');
const workoutPlanController = require('../controllers/workout_plan');
const client_progress_router = Router();

client_progress_router.get('/getprogress', client_progress_controller.get_client_progress);
client_progress_router.get('/getworkplan', workoutPlanController.get_workout_plans);

module.exports = client_progress_router;
