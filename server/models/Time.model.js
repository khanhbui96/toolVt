const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const timeSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    infor: {
        type: String,
        required: true
    },
    timeIn: {
        type: String,
        required: true
    },
    timeOut: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

const Time = mongoose.model('User', timeSchema);

module.exports = Time