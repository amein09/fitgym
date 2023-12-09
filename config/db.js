const mongoose= require("mongoose")

const initaite_db_connection = async () =>{
    try{
    await mongoose.connect(process.env.MONGO_CONNECTION_URI);
    console.log('cooected to  database');
    }catch(error){
        console.log(error);
    }
};

module.exports = initaite_db_connection;