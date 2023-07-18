const { Schema } = require("mongoose");
const addressSchema = require("./Address");
const user = require('./User');

const companySchema = new Schema({
    companyName: {
        type: String,
        required: true,
    },
    companyAddress: [addressSchema],
    companyPhone: {
        type: String,
        required: true,
    },
    companyAdmin: [user]
});

module.exports = companySchema;
