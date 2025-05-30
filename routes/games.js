const express = require('express');

var {getGames, createGame} = require('../controllers/games.js');

const router = express.Router();

router.get('/', getGames);
router.post('/', createGame);

module.exports = router;