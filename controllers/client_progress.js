 
const client_progress_service = require('../services/client_progress');

module.exports.get_client_progress = async (req, res) => {
    try {
        const progress = await client_progress_service.get_client_progress();
        console.log("we are in controller");
        res.send({ progress });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};


module.exports.post_progress = async (req, res) => {
    const progress_info = {
        client_id: req.body.client_id,
        date: req.body.date,
        exercise_data: req.body.exercise_data,
        diet_data: req.body.diet_data,
        total_burnout: req.body.total_burnout
    };

    try {
        console.log('Progress info:');
        console.log(progress_info);
        const created_progress = await clientProgressService.add_progress(progress_info);
        console.log('Done from controller to services');
        return res.status(201).send({
            msg: 'Progress created successfully',
            progress_id: created_progress._id
        });

    } catch (err) {
        console.log('Error in adding new progress (controller)');
        console.log(err);
        return res.status(500).send({
            error: err.message
        });
    }
}
