const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodEntrySchema = new Schema({
  poster: {
    type: String,
    required: true
  },
  posterEmail: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  tags: {
    type: String,
    enum: ['EVENT']
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

const FoodEntry = mongoose.model('FoodEntry', foodEntrySchema)

exports.foodEntryModel = FoodEntry
