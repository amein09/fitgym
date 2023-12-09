const { Schema, model } = require('mongoose');

const workout_plan_schema = new Schema({
  coach_id: { type: String, required: true },
  client_id: { type: String, required: true },
  plan_name: { type: String, required: true },
  days: [
    {
      day_name: { type: String, required: true },
      muscle_name: { type: String, required: true },
      exercises: [
        {
          exercise_name: { type: String, required: true },
          sets: { type: Number, required: true },
          reps: { type: Number, required: true },
          weight: { type: Number, required: true }
        }
      ]
    }
  ]
});

const workout_plan_model = model('WorkoutPlan', workout_plan_schema);

module.exports = workout_plan_model;
