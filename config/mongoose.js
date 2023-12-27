const mongoose = require('mongoose');
require('dotenv').config();
exports.db = () => {
    mongoose.connect("mongodb://localhost:27017/servey")
    .then((e) => console.log(`Connected to Mongodb: ${e.connection.host}`))
    .catch((e) => console.log(e));
};