const { Schema, model } = require("mongoose");

// const userSchema = require("./User");

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
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Account = model("Account", accountSchema);

module.exports = Account;
