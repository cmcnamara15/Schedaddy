const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt");
const addressSchema = require("./Address");

const userSchema = new Schema({

  firstName: {
    type: String,
    unique: false,
    required: true,
  },
  lastName: {
    type: String,
    unique: false,
    required: true,
  },
  phone: {
    type: String,
    unique: false,
    required: true,
  },
  hireDate: {
    type: String,
    unique: false,
    required: true,
  },
  terminationDate: {
    type: String,
    unique: false,
    required: false,
  },
  payRate: {
    type: Number,
    unique: false,
    required: true,
  },
  fullTime: {
    type: Boolean,
    unique: false,
    required: true,
  },
  activeEmployee: {
    type: Boolean,
    unique: false,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    unique: false,
    required: true,
  },
  shift: [
    {
      type: Schema.Types.ObjectId,
      ref: "Shift",
    }
  ],
  userAddress: addressSchema,
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
});

const User = model('User', userSchema);

module.exports = User

