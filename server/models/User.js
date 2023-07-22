const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');
// const shiftSchema = require('./Shift');
// const positionSchema = require('./Position');
// const companySchema = require('./Company');
const addressSchema = require("./Address");
// const accountSchema = require("./Account");

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
  socialSecurity: {
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
  shift: {
    type: Schema.Types.ObjectId,
    ref: "Shift",
  },
  position: {
    type: Schema.Types.ObjectId,
    ref: "Position",
  },
  address: [addressSchema],
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
  account: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
});

const User = model('User', userSchema);

module.exports = User
