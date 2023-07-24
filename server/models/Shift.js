const { Schema, model } = require("mongoose");

const shiftSchema = new Schema({
  
  startDateTime: {
    type: String,
    required: true,
  },
  endDateTime: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  position: {
    type: Schema.Types.ObjectId,
    ref: "Position",
  },
  note: {
    type: String,
    required: false,
  }
});

const Shift = model("Shift", shiftSchema);

module.exports = Shift;
