const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  documents: [
    {
      patientDoc: String,
      _id: 0
    },
  ],
  doctor:[
    {
      type: mongoose.Types.ObjectId,
      ref: "Doctor"
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
