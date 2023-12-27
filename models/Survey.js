const mongoose = require('mongoose');
const surveySchema = new mongoose.Schema({
    name: String,
    gender: String,
    nationality:String,
    email: String,
    phoneNumber: String,
    address: String,
    message: String
});
module.exports = mongoose.model('Survey', surveySchema);