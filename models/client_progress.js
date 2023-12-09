const { Schema, model } = require('mongoose');

const client_progress_schema = new Schema({
  client_id: { type: String, required: true },
  exercise_data: [
    {
      exercise_name: { type: String, required: true },
      sets: { type: Number, required: true },
      reps: { type: Number, required: true },
      weight: { type: Number, required: true }
    }
  ],
  diet_data: [
    {
      meal_name: { type: String, required: true },
      calories: { type: Number, required: true },
      protein: { type: Number, required: true },
      carbohydrates: { type: Number, required: true },
      fat: { type: Number, required: true }
    }
  ],
  total_burnout: { type: Number, required: true }
});

const client_progress_model = model('clientProgress', client_progress_schema);

module.exports = client_progress_model;
