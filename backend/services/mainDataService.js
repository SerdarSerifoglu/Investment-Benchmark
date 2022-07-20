const BaseService = require("./baseService");
const MainData = require("../models/mainData");
const TempService = require("./tempService");
const DateService = require("./dateService");
const axios = require("axios");
const {
  onsConvertToGram,
  dateStringConvertNumericNotConvert,
  dateStringReplaceAndReturn,
  dateStringConvertNumeric,
  findTodayDateAndConvertDateString,
} = require("../helpers/utils/commonUseFunctions");

var fs = require("fs");
const path = require("path");
const csv = require("csvtojson");

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

  async testCsv() {
    try {
      const dirPath = path.resolve(__dirname, "../csvler/");
      var files = fs.readdirSync(dirPath);
      var finishedFileNames = [];
      var tempArray = [];
      var firstDate = 0;
      var lastDate = 0;
      for (let i = 0; i < files.length; i++) {
        var insertManyArray = [];
        /* Burası sonradan db üzerinden çalışacak şekle getirilecek */
        var types = [
          "ADESE",
          "AEFES",
          "AGHOL",
          "AKBNK",
          "AKSA",
          "AKSEN",
          "ALARK",
          "ALBRK",
          "ALGYO",
          "ALKIM",
          "ARCLK",
          "ARDYZ",
          "ASELS",
          "AYDEM",
          "BERA",
          "BIMAS",
          "BRISA",
          "BRYAT",
          "BUCIM",
          "CANTE",
          "CCOLA",
          "CEMAS",
          "CEMTS",
          "CIMSA",
          "DEVA",
          "DOAS",
          "DOHOL",
          "ECILC",
          "EGEEN",
          "EKGYO",
          "ENKAI",
          "ERBOS",
          "EREGL",
          "FROTO",
          "GARAN",
          "GLYHO",
          "GOZDE",
          "GSDHO",
          "GUBRF",
          "GWIND",
          "HALKB",
          "HEKTS",
          "INDES",
          "IPEKE",
          "ISCTR",
          "ISDMR",
          "ISFIN",
          "ISGYO",
          "ISMEN",
          "IZMDC",
          "JANTS",
          "KARSN",
          "KARTN",
          "KCHOL",
          "KERVT",
          "KONTR",
          "KORDS",
          "KOZAA",
          "KOZAL",
          "KRDMD",
          "LOGO",
          "MAVI",
          "MGROS",
          "NTHOL",
          "NUGYO",
          "ODAS",
          "OTKAR",
          "OYAKC",
          "PARSN",
          "PETKM",
          "PGSUS",
          "QUAGR",
          "RTALB",
          "SARKY",
          "SASA",
          "SELEC",
          "SISE",
          "SKBNK",
          "SNGYO",
          "SOKM",
          "TAVHL",
          "TCELL",
          "THYAO",
          "TKFEN",
          "TKNSA",
          "TOASO",
          "TRGYO",
          "TSKB",
          "TTKOM",
          "TTRAK",
          "TUPRS",
          "TURSG",
          "ULKER",
          "VAKBN",
          "VERUS",
          "VESBE",
          "VESTL",
          "YATAS",
          "YKBNK",
          "ZOREN",
        ];
        const fileName = files[i];
        var type = "";
        types.forEach((t) => {
          if (fileName.includes(t)) {
            type = t;
          }
        });
        if (type == "") continue;

        var csvFilePath = dirPath + "/" + fileName;

        var jsonArray = await csv().fromFile(csvFilePath);

        ////Tarih Ayıklama
        var csvFirstItemDate = dateStringConvertNumericNotConvert(
          jsonArray[0]["Date"],
          "-"
        );
        var csvLastItemDate = dateStringConvertNumericNotConvert(
          jsonArray[jsonArray.length - 1]["Date"],
          "-"
        );

        firstDate =
          csvFirstItemDate > csvLastItemDate
            ? csvLastItemDate
            : csvFirstItemDate;
        lastDate =
          csvFirstItemDate > csvLastItemDate
            ? csvFirstItemDate
            : csvLastItemDate;
        ////Tarih Ayıklama Son

        var allDateData = await DateService.load({
          dateNumeric: { $gte: firstDate, $lte: lastDate },
        });
        allDateData.sort(
          (a, b) => Number(a.dateNumeric) - Number(b.dateNumeric)
        );

        for (let w = 0; w < allDateData.length; w++) {
          var csvData = jsonArray.find(
            (e) =>
              e.Date == dateStringReplaceAndReturn(allDateData[w].dateString)
          );
          // if (!csvData) {
          //   if (allDateData[w].values == null) {
          //     allDateData[w].values = {};
          //   }
          //   allDateData[w].values[type] = allDateData[w - 1].values[type];
          //   continue;
          // }

          if (allDateData[w].values == null) {
            allDateData[w].values = {};
          }

          if (csvData) {
            if (csvData["Close"] == "null") {
              allDateData[w].values[type] = allDateData[w - 1].values[type];
              // console.log("beforeDateObj", allDateData[w - 1]);
            } else {
              allDateData[w].values[type] = parseFloat(csvData["Close"]);
            }
          } else {
            if (w == 0) {
              allDateData[w].values[type] = 0;
            } else {
              allDateData[w].values[type] = allDateData[w - 1].values[type];
            }
          }

          var tempArrayObj = tempArray.find(
            (e) => e.dateString == allDateData[w].dateString
          );
          if (!tempArrayObj) {
            tempArrayObj = {
              dateString: allDateData[w].dateString,
              date: allDateData[w].date,
              year: allDateData[w].year,
              month: allDateData[w].month,
              day: allDateData[w].day,
              dateNumeric: allDateData[w].dateNumeric,
              weekDay: allDateData[w].weekDay,
              values: {
                [type]: allDateData[w].values[type],
              },
            };
            tempArray.push(tempArrayObj);
          } else {
            tempArrayObj.values = {
              ...tempArrayObj["values"],
              [type]: allDateData[w].values[type],
            };
          }
          console.log(w);
        }
        finishedFileNames.push(fileName);
        console.log(fileName);
      }

      // console.log("tempArray", tempArray);

      var insertObjects = [];
      var allMainData = await this.load({
        dateNumeric: { $gte: firstDate, $lte: lastDate },
      });

      for (let i = 0; i < tempArray.length; i++) {
        const tempObj = tempArray[i];

        var mainData = allMainData.find(
          (mainData) => mainData.dateString == tempObj.dateString
        );

        if (!mainData) {
          insertObjects.push(tempObj);
        } else {
          if (mainData.values == null) {
            mainData.values == tempObj.values;
          } else {
            mainData.values = { ...mainData.values, ...tempObj.values };
          }
          console.log(`up_${i}`, mainData);

          await this.update(mainData._id, mainData);
        }
      }
      // console.log(insertObjects, "insertObjects");
      if (insertObjects.length > 0) {
        await this.save(insertObjects);
      }

      return await {
        success: true,
        message: `${finishedFileNames.length} adet csv dosyası aktarılmıştır`,
        data: finishedFileNames,
      };
    } catch (error) {
      console.log(`Error: ${error.message} `);
      return {
        success: false,
        message: `Error: ${error.message} `,
      };
    }
  }

  async testCsvInvesting() {
    try {
      const dirPath = path.resolve(__dirname, "../csvler/");
      var files = fs.readdirSync(dirPath);
      var finishedFileNames = [];
      var tempArray = [];
      var firstDate = 0;
      var lastDate = 0;
      for (let i = 0; i < files.length; i++) {
        var insertManyArray = [];
        /* Burası sonradan db üzerinden çalışacak şekle getirilecek */
        var types = ["ALTIN", "GUMUS", "USD", "EUR"];
        const fileName = files[i];
        var type = "";
        types.forEach((t) => {
          if (fileName.includes(t)) {
            type = t;
          }
        });
        if (type == "") continue;

        var csvFilePath = dirPath + "/" + fileName;

        var jsonArray = await csv().fromFile(csvFilePath);

        ////Tarih Ayıklama
        var csvFirstItemDate = dateStringConvertNumeric(jsonArray[0]["Tarih"]);
        var csvLastItemDate = dateStringConvertNumeric(
          jsonArray[jsonArray.length - 1]["Tarih"]
        );

        firstDate =
          csvFirstItemDate > csvLastItemDate
            ? csvLastItemDate
            : csvFirstItemDate;
        lastDate =
          csvFirstItemDate > csvLastItemDate
            ? csvFirstItemDate
            : csvLastItemDate;
        ////Tarih Ayıklama Son

        var allDateData = await DateService.load({
          dateNumeric: { $gte: firstDate, $lte: lastDate },
        });
        allDateData.sort(
          (a, b) => Number(a.dateNumeric) - Number(b.dateNumeric)
        );

        for (let w = 0; w < allDateData.length; w++) {
          var csvData = jsonArray.find(
            (e) => e.Tarih == allDateData[w].dateString
          );
          // if (!csvData) {
          //   if (allDateData[w].values == null) {
          //     allDateData[w].values = {};
          //   }
          //   allDateData[w].values[type] = allDateData[w - 1].values[type];
          //   continue;
          // }

          if (allDateData[w].values == null) {
            allDateData[w].values = {};
          }

          if (csvData) {
            console.log("csvData", csvData);

            allDateData[w].values[type] = parseFloat(
              csvData["Şimdi"].replace(".", "").replace(",", ".")
            );
          } else {
            if (w == 0) {
              allDateData[w].values[type] = 0;
            } else {
              allDateData[w].values[type] = allDateData[w - 1].values[type];
            }
          }

          var tempArrayObj = tempArray.find(
            (e) => e.dateString == allDateData[w].dateString
          );
          if (!tempArrayObj) {
            tempArrayObj = {
              dateString: allDateData[w].dateString,
              date: allDateData[w].date,
              year: allDateData[w].year,
              month: allDateData[w].month,
              day: allDateData[w].day,
              dateNumeric: allDateData[w].dateNumeric,
              weekDay: allDateData[w].weekDay,
              values: {
                [type]: allDateData[w].values[type],
              },
            };
            tempArray.push(tempArrayObj);
          } else {
            tempArrayObj.values = {
              ...tempArrayObj["values"],
              [type]: allDateData[w].values[type],
            };
          }
          console.log(w);
        }
        finishedFileNames.push(fileName);
        console.log(fileName);
      }

      // console.log("tempArray", tempArray);

      var insertObjects = [];
      var allMainData = await this.load({
        dateNumeric: { $gte: firstDate, $lte: lastDate },
      });

      for (let i = 0; i < tempArray.length; i++) {
        const tempObj = tempArray[i];

        var mainData = allMainData.find(
          (mainData) => mainData.dateString == tempObj.dateString
        );

        if (!mainData) {
          insertObjects.push(tempObj);
        } else {
          if (mainData.values == null) {
            mainData.values == tempObj.values;
          } else {
            mainData.values = { ...mainData.values, ...tempObj.values };
          }
          console.log(`up_${i}`, mainData);
          await this.update(mainData._id, mainData);
        }
      }
      // console.log(insertObjects, "insertObjects");
      if (insertObjects.length > 0) {
        await this.save(insertObjects);
      }

      return await {
        success: true,
        message: `${finishedFileNames.length} adet csv dosyası aktarılmıştır`,
        data: finishedFileNames,
      };
    } catch (error) {
      console.log(`Error: ${error.message} `);
      return {
        success: false,
        message: `Error: ${error.message} `,
      };
    }
  }

  async insertBistDataFromAPI() {
    var todayDateString = await findTodayDateAndConvertDateString();

    var response = await axios.get(process.env.HISSE_API, {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.HISSE_API_KEY,
      },
    });

    var data = response.data.result;
    var resultObj = { values: {} };

    var datesData = await DateService.findOneBy("dateString", todayDateString);
    var mainData = await this.findOneBy("dateString", todayDateString);

    data.forEach((e) => {
      var splitedText = e.text.split("-");
      var code = splitedText[0].trim();
      var name = splitedText[1].trim();
      resultObj.values[code] = e.lastprice;
    });

    if (!mainData) {
      resultObj.date = datesData.date;
      resultObj.year = datesData.year;
      resultObj.month = datesData.month;
      resultObj.day = datesData.day;
      resultObj.weekDay = datesData.weekDay;
      resultObj.dateString = datesData.dateString;
      resultObj.dateNumeric = datesData.dateNumeric;
      var result = await this.insert(resultObj);
    } else {
      var result = await this.update(mainDataç_id, resultObj);
    }

    return {
      success: true,
      message: `aktarım tamamlanmıştır`,
      data: result,
    };
  }
}

module.exports = new MainDataService(MainData);
