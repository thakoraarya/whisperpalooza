const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
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
    nickname: {
        type: String,
        required: false,

    },
    picture: {
        type: String,
        // for now we are making it required
        required: true
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('messanger', UserSchema);