const express = require("express");
const date = require("./date");

const router = express.Router();
router.use("/date", date);

module.exports = router;
