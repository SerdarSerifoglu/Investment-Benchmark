const BaseService = require("./baseService.js");
const Report = require("../models/report.js");
const moment = require("moment");
const mainDataService = require("./mainDataService");
class ReportService extends BaseService {
  async revenueReport({
    startDate,
    endDate,
    investmentAmount,
    investmentType,
  }) {
    var startDateData = await mainDataService.findBy(
      "date",
      moment.utc(startDate)
    );
    var endDateData = await mainDataService.findBy("date", moment.utc(endDate));

    var resultArray = [];

    for (let i = 0; i < investmentType.length; i++) {
      const investType = investmentType[i];
      var resultObj = {};
      var initialValueTL = parseFloat(investmentAmount);
      var initialCount = (
        initialValueTL / startDateData[0].values[investType]
      ).toFixed(4);
      var initialUnitPriceTL = startDateData[0].values[investType].toFixed(2);
      var initialDateString = startDateData[0].dateString;
      var lastValueTL = (
        initialCount * endDateData[0].values[investType]
      ).toFixed(4);
      var lastUnitPriceTL = endDateData[0].values[investType].toFixed(2);
      var lastDateString = endDateData[0].dateString;
      var revenueRate = ((lastValueTL / initialValueTL) * 100 - 100).toFixed(2);
      var investTypeValue = investType;
      resultObj = {
        initialValueTL,
        initialCount,
        initialUnitPriceTL,
        initialDateString,
        lastValueTL,
        revenueRate,
        investTypeValue,
        lastUnitPriceTL,
        lastDateString,
      };
      resultArray.push(resultObj);
    }
    return resultArray;
  }
}

module.exports = new ReportService(Report);
