const { Schema } = require("mongoose");

const addressSchema = new Schema({
    street1: {
        type: String,
        required: true,
    },
    street2: {
        type: String,
        required: true,
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
});

module.exports = addressSchema;
