const mongoose = require('mongoose');

const messageModel =  mongoose.Schema({
    chat: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat' 
    },
    sender: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const message=mongoose.model('Message', messageModel);

module.exports={message};