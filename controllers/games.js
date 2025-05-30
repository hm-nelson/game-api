const mongoose = require("mongoose");
const game = require('../models/game.js');

const getGames = async (req, res) => {
    try {
        const games = await game.find();
        res.status(200).json(games)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
};

const createGame = async (req, res) => {
    const games = req.body;
    const newGame = new game(games)
    try {
        await newGame.save();
        res.status(201).json(newGame)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
};

module.exports = {getGames, createGame}

