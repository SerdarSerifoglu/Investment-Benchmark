const express = require("express");
const date = require("./date");
const temp = require("./temp");

const router = express.Router();
router.use("/dates", date);
router.use("/temps", temp);
module.exports = router;
