const mongoose = require("mongoose");

const DateSchema = new mongoose.Schema(
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
  { timestamps: false }
);

function dateConvertStringAndFirstCharAddZero(numericDate) {
  return numericDate < 10 ? `0${numericDate}` : `${numericDate}`;
}

DateSchema.pre("save", async function preSave(next) {
  let object = this;
  let date = object.date;
  object.year = date.getFullYear();
  object.month = date.getMonth() + 1;
  object.day = date.getDate();
  object.weekDay = date.getDay();
  object.dateString =
    dateConvertStringAndFirstCharAddZero(object.day) +
    "." +
    dateConvertStringAndFirstCharAddZero(object.month) +
    "." +
    object.year.toString();

  object.dateNumeric = parseInt(
    object.dateString.split(".").reverse().join("")
  );

  return next();
});

module.exports = mongoose.model("Date", DateSchema);
