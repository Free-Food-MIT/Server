const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    required: true,
    default: false
  },
  type: {
    type: 'String',
    enum: ['Student', 'Faculty', 'Restaurant', 'Organization']
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

const User = mongoose.model('User', userSchema)

exports.userModel = User
