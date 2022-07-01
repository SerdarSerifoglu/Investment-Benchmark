const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({});

module.exports = mongoose.model("Report", ReportSchema);
