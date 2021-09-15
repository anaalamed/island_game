import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: 1
    },
    wins: {
        type: Number,
        default: 0
    },
    losings: {
        type: Number,
        default: 0
    }
});

 const Player = mongoose.model('User', UserSchema);

 export default Player;