import mongoose from 'mongoose';

const MessagesSchema = new mongoose.Schema({
    message: {
        type: String
    }, 
    num: {
        type: Number
    }
});

 const Messages = mongoose.model('funnyMessage', MessagesSchema);

 export default Messages;