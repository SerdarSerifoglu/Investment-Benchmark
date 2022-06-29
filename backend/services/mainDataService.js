const BaseService = require("./baseService");
const MainData = require("../models/mainData");
const TempService = require("./tempService");
const DateService = require("./dateService");
const { onsConvertToGram } = require("../helpers/utils/commonUseFunctions");

class MainDataService extends BaseService {
  async createMainDataFromTemps() {
    var firstData = await TempService.queryLimited({}, 1, { date: 1 });
    var lastData = await TempService.queryLimited({}, 1, { date: -1 });

    var allDates = await DateService.load({}, { date: 1 });
    var resultArray = [];
    for (let i = 0; i < allDates.length; i++) {
      const mainData = allDates[i];
      var oneDaysValues = await TempService.query({ date: mainData.date });
      if (oneDaysValues.length == 0) continue;
      var allValues = {};

      oneDaysValues.forEach((oneDay) => {
        allValues[oneDay.type] = oneDay.value;
        if (oneDay.type == "ALTIN") {
          allValues[oneDay.type + "_TL"] = onsConvertToGram(
            oneDay.value,
            oneDaysValues.filter((e) => e.type == "USD")[0].value
          );
        }
        if (oneDay.type == "GUMUS") {
          allValues[oneDay.type + "_TL"] = onsConvertToGram(
            oneDay.value,
            oneDaysValues.filter((e) => e.type == "USD")[0].value
          );
        }
        if (oneDay.type == "BTC") {
          allValues[oneDay.type + "_TL"] =
            oneDay.value *
            oneDaysValues.filter((e) => e.type == "USD")[0].value;
        }
      });

      var resultObj = {
        date: mainData.date,
        dateString: mainData.dateString,
        dateNumeric: mainData.dateNumeric,
        year: mainData.year,
        month: mainData.month,
        day: mainData.day,
        weekday: mainData.weekDay,
        values: allValues,
      };
      resultArray.push(resultObj);
    }

    const result = await this.save(resultArray);
  }
}

module.exports = new MainDataService(MainData);
