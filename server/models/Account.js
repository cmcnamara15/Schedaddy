const { Schema, model } = require("mongoose");

const accountSchema = new Schema({
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
});

const Account = model("Account", accountSchema);

module.exports = Account;
