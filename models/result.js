const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resultSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique:true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  }
});

module.exports  = mongoose.model("Result", resultSchema);
