const { dateService } = require("../services/index");

const router = require("express").Router();

router.post("/createDates", async (req, res) => {
  const response = await dateService.createBaseDateData(req.body);

  res.json(response);
});

module.exports = router;
