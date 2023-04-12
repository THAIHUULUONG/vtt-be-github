const express = require('express');

const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(cookieParser());

// import all routes

const checkingInformation = require('./routes/checking/checkingInformation');

app.use('/api', checkingInformation);

module.exports = app