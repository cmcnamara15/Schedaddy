const { Schema } = require("mongoose");

const userSchema = require("./User");

const positionSchema = new Schema({
    user: [userSchema],
    jobTitle: {
        type: String,
        required: true,
    },
});

module.exports = positionSchema;
