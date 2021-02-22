const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resultSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  //We have added email attribute to prevent clashes since multiple same names can be possible
  email: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
});

module.exports  = mongoose.model("Result", resultSchema);
