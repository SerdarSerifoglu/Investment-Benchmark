const { mainDataService } = require("../services/index");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const response = await mainDataService.createMainDataFromTemps();

  res.json(response);
});

router.get("/testCsv", async (req, res) => {
  const response = await mainDataService.testCsv();

  res.json(response);
});

router.get("/testCsvInvest", async (req, res) => {
  const response = await mainDataService.testCsvInvesting();

  res.json(response);
});

router.get("/dailyDataInsertBist", async (req, res) => {
  const response = await mainDataService.insertBistDataFromAPI();

  res.json(response);
});

module.exports = router;
