const mongoose = require('mongoose');

const mongodb= "mongodb://127.0.0.1:27017/test";

const connectToMongo = () =>{
    mongoose.connect(mongodb);
    console.log("connected");
}

module.exports = connectToMongo;