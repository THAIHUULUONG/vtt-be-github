const express = require('express');

const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(cookieParser());

app.get("/", (res, req)=>{
    sendEmail()
    res.send("Well")
})

// import all routes

const checkingInformation = require('./routes/checking/checkingInformation');
const sendEmail = require('./controllers/checking/ses');

app.use('/api', checkingInformation);
app.use('/send', sendEmail);

module.exports = app