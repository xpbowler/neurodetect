const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {required: true, type: String, unique: true},
    password: {required: true, type: String, unique: false}
}, {
    timestamps: true
})

const User = mongoose.model('User',userSchema)

module.exports = User