const { reportService } = require("../services/index");

const router = require("express").Router();

router.post("/revenue-report", async (req, res) => {
  const response = await reportService.revenueReport(req.body);

  res.json(response);
});
router.post("/cumulative-report", async (req, res) => {
  const response = await reportService.cumulativeReport(req.body);

  res.json(response);
});

router.post("/investment-tools", async (req, res) => {
  const response = await reportService.investmentTools(req.body);

  res.json(response);
});

module.exports = router;
