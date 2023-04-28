const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    chatSession: {
        type: Schema.Types.ObjectId,
        ref: 'ChatSession',
        required: true
    },
    sentAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('chat', chatSchema);
