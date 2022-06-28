const mongoose = require("mongoose");

const TempSchema = new mongoose.Schema({
  dateString: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  type: { type: String },
  value: { type: Number },
});

module.exports = mongoose.model("Temp", TempSchema);
