const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const medicalSchema = new Schema({
  medicalName: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("Medical", medialSchema);
