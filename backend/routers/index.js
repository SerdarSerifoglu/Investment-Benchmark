const express = require("express");
const date = require("./date");
const temp = require("./temp");
const mainData = require("./mainData");

const router = express.Router();
router.use("/dates", date);
router.use("/temps", temp);
router.use("/md", mainData);
module.exports = router;
