const mongoose = require('mongoose')

const informationCheckingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter email'],
        trim: true,
        maxLength: [100, 'Team wallet address cannot exceed 100 characters']
    },
    phone: {
        type: String,
        required: [true, 'Please enter phone'],
        trim: true,
        maxLength: [11, 'Limit cannot exceed 11 characters']
    },
    arrayAnswer: {
        type: Array,
        required: [true, 'Array Answer Not Null'],
        trim: true
    },
    timeAnswer: {
        type: String,
        required: [true, 'Time Not Null'],
        trim: true,
    },
    resultCheck: {
        type: String,
        required: [true, 'Result Check Not Null'],
        trim: true,
    }
})

module.exports = mongoose.model('informationChecking', informationCheckingSchema);