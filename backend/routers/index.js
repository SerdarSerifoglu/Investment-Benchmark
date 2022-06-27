const express = require("express");
const date = require("./date");

const router = express.Router();
router.use("/dates", date);

module.exports = router;
