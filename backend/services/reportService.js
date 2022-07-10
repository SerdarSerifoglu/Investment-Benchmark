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
  investmentAmountCalculator(amount, improveRate, counter) {
    let _amount = parseFloat(amount);
    for (let i = 0; i < counter; i++) {
      _amount += (_amount * improveRate) / 100;
    }
    return _amount;
  }
  async cumulativeReport({
    startDate,
    endDate,
    investmentTypeObjects,
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

    let counter = 0;
    for (let i = 0; i < allFirstDayOfMonth.length; i++) {
      let investmentAmountValue = parseFloat(investmentAmount);
      let element = allFirstDayOfMonth[i];
      if (i != 0) {
        let beforeElement = allFirstDayOfMonth[i - 1];

        if (element.year != beforeElement.year) {
          counter++;
        }
      }
      for (let e = 0; e < investmentTypeObjects.length; e++) {
        const investmentTypeObject = investmentTypeObjects[e];

        let resultObj = {};

        var investmentAmountValue2 =
          (this.investmentAmountCalculator(
            investmentAmountValue,
            improveRate,
            counter
          ) *
            investmentTypeObject.investmentTypeRate) /
          100;

        resultObj.investTypeName = investmentTypeObject.investmentType;
        resultObj.initialUnitPriceTL =
          element.values[investmentTypeObject.investmentType].toFixed(3);
        resultObj.lastUnitPriceTL =
          endDateData[0].values[investmentTypeObject.investmentType].toFixed(3);
        resultObj.dateString = element.dateString;
        resultObj.investmentAmount = investmentAmountValue2;
        resultObj.investmentTypeUnitCount = parseFloat(
          (
            investmentAmountValue2 /
            element.values[investmentTypeObject.investmentType]
          ).toFixed(2)
        );
        resultObj.lastDateInvestmentValue = parseFloat(
          (
            resultObj.investmentTypeUnitCount *
            endDateData[0].values[investmentTypeObject.investmentType]
          ).toFixed(4)
        );
        resultObj.revenueRate = parseFloat(
          (
            (resultObj.lastDateInvestmentValue / investmentAmountValue2) * 100 -
            100
          ).toFixed(2)
        );

        resultArray.push(resultObj);

        const investmentTypeTotalInvestmentAmount =
          investmentTypeObject.investmentType + "_investmentAmount";
        const investmentTypeTotalLastDateInvestmentValue =
          investmentTypeObject.investmentType + "_lastDateInvestmentValue";
        const investmentTypeTotalUnitCount =
          investmentTypeObject.investmentType + "_unitCount";
        const investmentTypeTotalRevenueRate =
          investmentTypeObject.investmentType + "_revenueRate";

        if (total[investmentTypeTotalInvestmentAmount] == null) {
          total[investmentTypeTotalInvestmentAmount] = 0.0;
        }
        if (total[investmentTypeTotalLastDateInvestmentValue] == null) {
          total[investmentTypeTotalLastDateInvestmentValue] = 0.0;
        }
        if (total[investmentTypeTotalUnitCount] == null) {
          total[investmentTypeTotalUnitCount] = 0.0;
        }
        if (total[investmentTypeTotalRevenueRate] == null) {
          total[investmentTypeTotalRevenueRate] = 0.0;
        }
        total[investmentTypeTotalInvestmentAmount] += investmentAmountValue2;
        total[investmentTypeTotalLastDateInvestmentValue] +=
          resultObj.lastDateInvestmentValue;
        total[investmentTypeTotalUnitCount] +=
          resultObj.investmentTypeUnitCount;
        total[investmentTypeTotalRevenueRate] = parseFloat(
          (
            (total[investmentTypeTotalLastDateInvestmentValue] /
              total[investmentTypeTotalInvestmentAmount]) *
              100 -
            100
          ).toFixed(2)
        );
        total.investmentAmount += investmentAmountValue2;
        total.lastDateInvestmentValue += resultObj.lastDateInvestmentValue;
        total.investmentTypeUnitCount += resultObj.investmentTypeUnitCount;
        total.revenueRate = parseFloat(
          (
            (total.lastDateInvestmentValue / total.investmentAmount) * 100 -
            100
          ).toFixed(2)
        );
      }
    }

    var result = { total, resultArray };
    console.log({ total, resultArray });

    return result;
  }
}

module.exports = new ReportService(Report);
