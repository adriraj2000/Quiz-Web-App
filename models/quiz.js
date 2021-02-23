const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Quiz", QuizSchema);
