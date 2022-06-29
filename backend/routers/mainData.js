const { mainDataService } = require("../services/index");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const response = await mainDataService.createMainDataFromTemps();

  res.json(response);
});

module.exports = router;
