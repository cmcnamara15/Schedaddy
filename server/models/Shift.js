const { Schema } = require("mongoose");

const userSchema = require("./User");

const shiftSchema = new Schema({
    user: [userSchema],
    startDateTime: {
        type: String,
        required: true,
    },
    endDateTime: {
        type: String,
        required: true,
    },
});

module.exports = shiftSchema;
