const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const initaite_db_connection = require('./config/db');
const client_progress_router = require('./routes/client_progress');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config({ path: './config/.env' });

const port_number = 7000;

app.use('/client_progress', client_progress_router);


app.post('/send', (req, res) => {
    res.send("it works ");
    console.log(req.body);
});

app.listen(port_number, async () => {
    console.log(`server is now listening to port ${process.env.PORT}`);
    await initaite_db_connection();
});
