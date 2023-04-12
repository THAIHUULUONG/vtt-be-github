const mongoose = require('mongoose');

const connectDatabase = () => {
 mongoose.connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // ,
    // useCreateIndex: true
 }).then( con => {
    console.log("Success !!!");
 }).catch((err)=> console.log(err))
}

module.exports = connectDatabase