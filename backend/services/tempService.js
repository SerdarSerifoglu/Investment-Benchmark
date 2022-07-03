const BaseService = require("./baseService.js");
const Temp = require("../models/temp");
const DateService = require("./dateService");

var fs = require("fs");
const path = require("path");
const csv = require("csvtojson");

const {
  dateStringConvertNumeric,
  dateStringConvertNumericNotConvert,
  dateStringReplaceAndReturn,
} = require("../helpers/utils/commonUseFunctions");

class TempService extends BaseService {
  async insertTempDataFromCsv() {
    try {
      const dirPath = path.resolve(__dirname, "../csvler/");
      var files = fs.readdirSync(dirPath);
      var finishedFileNames = [];
      for (let i = 0; i < files.length; i++) {
        var insertManyArray = [];
        /* Burası sonradan db üzerinden çalışacak şekle getirilecek */
        var types = ["ALTIN", "GUMUS", "USD", "EUR", "BTC"];
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

        var firstDate =
          csvFirstItemDate > csvLastItemDate
            ? csvLastItemDate
            : csvFirstItemDate;
        var lastDate =
          csvFirstItemDate > csvLastItemDate
            ? csvFirstItemDate
            : csvLastItemDate;
        ////Tarih Ayıklama Son

        var mainData = await DateService.load({
          dateNumeric: { $gte: firstDate, $lte: lastDate },
        });
        mainData.sort((a, b) => Number(a.dateNumeric) - Number(b.dateNumeric));

        var allTempData = await this.load({ type: type });

        for (let i = 0; i < mainData.length; i++) {
          var csvData = jsonArray.find(
            (e) => e.Tarih == mainData[i].dateString
          );

          if (mainData[i].values == null) {
            mainData[i].values = {};
          }

          if (csvData) {
            mainData[i].values[type] = parseFloat(
              csvData["Şimdi"].replace(".", "").replace(",", ".")
            );
          } else {
            if (i == 0) {
              mainData[i].values[type] = 0;
            } else {
              mainData[i].values[type] = mainData[i - 1].values[type];
            }
          }

          var tempControl = allTempData.find(
            (e) => e.dateString == mainData[i].dateString
          );

          if (tempControl == null && mainData[i].values[type] != 0) {
            insertManyArray.push({
              date: mainData[i].date,
              dateString: mainData[i].dateString,
              type: type,
              value: mainData[i].values[type],
            });
          }
        }

        await this.save(insertManyArray);
        finishedFileNames.push(fileName);
        console.log(fileName);
      }

      return await {
        success: true,
        message: `${finishedFileNames.length} adet csv dosyası aktarılmıştır`,
        data: finishedFileNames,
      };
    } catch (error) {
      return {
        success: false,
        message: `Error: ${error.message} `,
      };
    }
  }

  async insertTempDataFromCsv_v2() {
    try {
      const dirPath = path.resolve(__dirname, "../csvler/");
      var files = fs.readdirSync(dirPath);
      var finishedFileNames = [];
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
          "BIOEN",
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
          "SAHOL",
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

        var firstDate =
          csvFirstItemDate > csvLastItemDate
            ? csvLastItemDate
            : csvFirstItemDate;
        var lastDate =
          csvFirstItemDate > csvLastItemDate
            ? csvFirstItemDate
            : csvLastItemDate;
        ////Tarih Ayıklama Son

        var mainData = await DateService.load({
          dateNumeric: { $gte: firstDate, $lte: lastDate },
        });
        mainData.sort((a, b) => Number(a.dateNumeric) - Number(b.dateNumeric));

        var allTempData = await this.load({ type: type });

        for (let i = 0; i < mainData.length; i++) {
          var csvData = jsonArray.find(
            (e) => e.Date == dateStringReplaceAndReturn(mainData[i].dateString)
          );

          if (mainData[i].values == null) {
            mainData[i].values = {};
          }

          if (csvData) {
            if (csvData["Close"] == "null") {
              mainData[i].values[type] = mainData[i - 1].values[type];
            } else {
              mainData[i].values[type] = parseFloat(csvData["Close"]);
            }
          } else {
            if (i == 0) {
              mainData[i].values[type] = 0;
            } else {
              mainData[i].values[type] = mainData[i - 1].values[type];
            }
          }

          var tempControl = allTempData.find(
            (e) => e.dateString == mainData[i].dateString
          );

          if (tempControl == null && mainData[i].values[type] != 0) {
            insertManyArray.push({
              date: mainData[i].date,
              dateString: mainData[i].dateString,
              type: type,
              value: mainData[i].values[type],
            });
          }
        }

        await this.save(insertManyArray);
        finishedFileNames.push(fileName);
        console.log(fileName);
      }

      return await {
        success: true,
        message: `${finishedFileNames.length} adet csv dosyası aktarılmıştır`,
        data: finishedFileNames,
      };
    } catch (error) {
      return {
        success: false,
        message: `Error: ${error.message} `,
      };
    }
  }
}

module.exports = new TempService(Temp);
