const mongoose = require('mongoose');
require('dotenv').config();
exports.db = () => {
    mongoose.connect("mongodb+srv://krakash1022:0987@cluster0.ktvqi8r.mongodb.net/servey")
    .then((e) => console.log(`Connected to Mongodb: ${e.connection.host}`))
    .catch((e) => console.log(e));
};
