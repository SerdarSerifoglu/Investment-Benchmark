const { tempService } = require("../services/index");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const response = await tempService.insertTempDataFromCsv();

  res.json(response);
});

module.exports = router;
