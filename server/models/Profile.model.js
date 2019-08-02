const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
    {
        battled: {
            type: String,
        },
        birthday: {
            type: String,
        },
        degree: {
            type: String,
        },
        homeTown: {
            type: String,
        },
        idArmy: {
            type: String,
        },
        language:{
            type: String,
        },
        name: {
            type: String,
        },
        unit: {
            type: String,
        },
        party1:{
            type: String
        },
        party2:{
            type: String
        },
        position:{
            type: String,
        },
        rank: {
            type: String,
        },
        school:{
            type: String,
        },
        title:{
            type: String,
        },
        yearIn: {
            type: String,
        },
        avatar: {
            type: String,
        }
    }
);

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile