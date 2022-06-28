const BaseService = require("./baseService.js");
const Temp = require("../models/temp");
const dateService = require("./dateService");
var fs = require("fs");
const path = require("path");
const csv = require("csvtojson");

const {
  dateStringConvertNumeric,
} = require("../helpers/utils/commonUseFunctions");

class TempService extends BaseService {
  async insertTempDataFromCsv() {
    const dirPath = path.resolve(__dirname, "../csvler/");
    var files = fs.readdirSync(dirPath);
    console.dir(files);
    for (let i = 0; i < files.length; i++) {
      var insertManyArray = [];
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
        "BASGZ",
        "BERA",
        "BIMAS",
        "BIOEN",
        "BRISA",
        "BRYAT",
        "CANTE",
        "CCOLA",
        "CEMAS",
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
        "ESEN",
        "FROTO",
        "GARAN",
        "GENIL",
        "GESAN",
        "GLYHO",
        "GOZDE",
        "GUBRF",
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
        "KARSN",
        "KARTN",
        "KCHOL",
        "KERVT",
        "KORDS",
        "KOZAA",
        "KOZAL",
        "KRDMD",
        "KRVGD",
        "LOGO",
        "MAVI",
        "MGROS",
        "NTHOL",
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
        "ZRGYO",
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
      var csvFirstItemDate = dateStringConvertNumeric(jsonArray[0]["Tarih"]);
      var csvLastItemDate = dateStringConvertNumeric(
        jsonArray[jsonArray.length - 1]["Tarih"]
      );

      var firstDate =
        csvFirstItemDate > csvLastItemDate ? csvLastItemDate : csvFirstItemDate;
      var lastDate =
        csvFirstItemDate > csvLastItemDate ? csvFirstItemDate : csvLastItemDate;
      ////Tarih Ayıklama Son

      var mainData = await dateService.load({
        dateNumeric: { $gte: firstDate, $lte: lastDate },
      });
      mainData.sort((a, b) => Number(a.dateNumeric) - Number(b.dateNumeric));

      var allTempData = await this.load({ type: type });

      for (let i = 0; i < mainData.length; i++) {
        var csvData = jsonArray.find((e) => e.Tarih == mainData[i].dateString);

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
    }
  }
}

module.exports = new TempService(Temp);
