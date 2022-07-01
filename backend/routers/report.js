const { reportService } = require("../services/index");

const router = require("express").Router();

router.post("/revenue-report", async (req, res) => {
  const response = await reportService.revenueReport(req.body);

  res.json(response);
});

module.exports = router;
