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

  async cumulativeReport({
    startDate,
    endDate,
    investmentType,
    investmentAmount,
    improveRate,
  }) {
    var allFirstDayOfMonth = await mainDataService.query(
      {
        day: 1,
        date: { $gte: moment.utc(startDate), $lte: moment.utc(endDate) },
      },
      { date: 1 }
    );

    var startDateData = await mainDataService.findBy(
      "date",
      moment.utc(startDate)
    );
    var endDateData = await mainDataService.findBy("date", moment.utc(endDate));

    if (startDateData[0].dateString != allFirstDayOfMonth[0].dateString) {
      allFirstDayOfMonth.unshift(startDateData[0]);
    }
    var resultArray = [];
    var total = {
      investmentAmount: 0.0,
      lastDateInvestmentValue: 0.0,
      investmentTypeUnitCount: 0.0,
    };

    var improveRate = parseFloat(improveRate);
    var investmentAmount = parseFloat(investmentAmount);
    for (let i = 0; i < allFirstDayOfMonth.length; i++) {
      let resultObj = {};
      let element = allFirstDayOfMonth[i];

      if (i != 0) {
        let beforeElement = allFirstDayOfMonth[i - 1];

        if (element.year != beforeElement.year) {
          investmentAmount = (investmentAmount * (improveRate + 100)) / 100;
        }
      }

      resultObj.investTypeName = investmentType;
      resultObj.initialUnitPriceTL = element.values[investmentType].toFixed(3);
      resultObj.lastUnitPriceTL =
        endDateData[0].values[investmentType].toFixed(3);
      resultObj.dateString = element.dateString;
      resultObj.investmentAmount = investmentAmount;
      resultObj.investmentTypeUnitCount = parseFloat(
        (investmentAmount / element.values[investmentType]).toFixed(2)
      );
      resultObj.lastDateInvestmentValue = parseFloat(
        (
          resultObj.investmentTypeUnitCount *
          endDateData[0].values[investmentType]
        ).toFixed(4)
      );
      resultObj.revenueRate = parseFloat(
        (
          (resultObj.lastDateInvestmentValue / investmentAmount) * 100 -
          100
        ).toFixed(2)
      );

      resultArray.push(resultObj);

      total.investmentAmount += investmentAmount;
      total.lastDateInvestmentValue += resultObj.lastDateInvestmentValue;
      total.investmentTypeUnitCount += resultObj.investmentTypeUnitCount;
      total.revenueRate = parseFloat(
        (
          (total.lastDateInvestmentValue / total.investmentAmount) * 100 -
          100
        ).toFixed(2)
      );
    }

    var result = { total, resultArray };
    console.log({ total, resultArray });

    return result;
  }
}

module.exports = new ReportService(Report);
