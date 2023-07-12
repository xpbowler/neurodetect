const mongoose = require('mongoose')

const Schema = mongoose.Schema

const resultSchema = new Schema({
    username: {type: String, required: true, unique: false},
    prediction: {type: String, required: true, unique: false},
    pdist: {type: String, required: true, unique: false},
    class: {type: String, required: true, unique: false}
}, {
    timestamp: true
})

const Result = mongoose.model('Result',resultSchema)

module.exports = Result