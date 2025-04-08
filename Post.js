const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  imagelink: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 300,
  },
})

module.exports = mongoose.model("Post", postSchema)
