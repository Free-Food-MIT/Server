const mongoose = require('mongoose')
const Schema = mongoose.Schema

const verificationCodeSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['REPORT', 'VERIFY', 'POST']
  },
  code: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    expires: 1000 * 60 * 10
  }
})

const VerificationCode = mongoose.model('VerificationCode', verificationCodeSchema)

exports.verificationCodeModel = VerificationCode
