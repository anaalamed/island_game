import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
    // funnyMessages: {
    //     type: Array
    // }
});

 const Game = mongoose.model('Game', GameSchema);

 export default Game;