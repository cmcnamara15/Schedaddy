const { Schema, model } = require("mongoose");

// const addressSchema = require("./Address");
// const userSchema = require("./User")

const companySchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyAddress: {
    type: Schema.Types.ObjectId,
    ref: "Address",
  },
  companyPhone: {
    type: String,
    required: true,
  },
  companyAdmin: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Company = model("Company", companySchema);

module.exports = Company;
