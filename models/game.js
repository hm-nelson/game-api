const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const game = mongoose.model('game', gameSchema);
module.exports = game;