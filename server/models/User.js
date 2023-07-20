const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// const shiftSchema = require('./Shift');
// const positionSchema = require('./Position');
// const companySchema = require('./Company');
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
  email: {
    type: String,
    unique: false,
    match: [/.+@.+\..+/, "Must match an email address!"],
    required: true,
  },
  password: {
    type: String,
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
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
})
// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
        return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User
