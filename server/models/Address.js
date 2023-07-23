const { Schema } = require("mongoose");

const addressSchema = new Schema({
  
  street1: {
    type: String,
    required: true,
  },
  street2: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

module.exports = addressSchema;
