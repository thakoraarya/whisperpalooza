const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile:{
        type:String,
        // for now we are not making it required
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('messanger', UserSchema);