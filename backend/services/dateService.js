const BaseService = require("./baseService.js");
const Date = require("../models/date.js");

class DateService extends BaseService {
  async createBaseDateData(startDate, endDate) {
    try {
      var startDateMoment = moment(startDate, "DD-MM-YYYY")
        .utc()
        .startOf("day")
        .add(1, "day");
      var endDateMoment = moment(endDate, "DD-MM-YYYY")
        .utc()
        .startOf("day")
        .add(1, "day");

      var diffDayCount = endDateMoment - startDateMoment + 1;

      for (let index = 1; index <= diffDayCount; index++) {
        var dateData = await dateService.findBy(
          "date",
          moment(startDate, "DD-MM-YYYY").utc().startOf("day").add(index, "day")
        );
        if (dateData == null || dateData.length == 0) {
          await dateService.insert({
            date: moment(startDate, "DD-MM-YYYY")
              .utc()
              .startOf("day")
              .add(index, "day"),
          });
        }
      }

      return await {
        success: true,
        message: `${startDate} - ${endDate} tarihleri arasındaki günler için kayıt oluşturulmuştur`,
      };
    } catch (error) {
      return {
        success: false,
        message: `Error: ${error.message} `,
      };
    }
  }
}

module.exports = new DateService(Date);
