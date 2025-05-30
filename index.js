const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

var gameRoutes = require('./routes/games.js');

const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/games', gameRoutes);

const CONNECTION_URL = 'mongodb+srv://ankitkoreak1:SPoUJlg0d1yEFzGG@cluster0.pi1stmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`)))
.catch((error) => console.log(error.message));

