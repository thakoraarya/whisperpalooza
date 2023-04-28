const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatRoomSchema = new mongoose.Schema({
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('chatroom', chatRoomSchema);
