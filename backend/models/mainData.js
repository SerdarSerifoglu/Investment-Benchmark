const mongoose = require("mongoose");

const MainDataSchema = new mongoose.Schema(
  {
    dateString: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
    dateNumeric: {
      type: Number,
    },
    year: {
      type: Number,
    },
    month: {
      type: Number,
    },
    day: {
      type: Number,
    },
    weekDay: {
      type: Number,
    },
    values: {
      type: Object,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MainData", MainDataSchema);
