const BaseService = require("./baseService.js");
const Date = require("../models/date.js");
const moment = require("moment");
class DateService extends BaseService {
  async createBaseDateData({ startDate, endDate }) {
    try {
      var startDateMoment = moment(startDate, "DD-MM-YYYY")
        .utc()
        .startOf("day")
        .add(1, "day");
      var endDateMoment = moment(endDate, "DD-MM-YYYY")
        .utc()
        .startOf("day")
        .add(1, "day");

      const oneDayMs = 86400000;
      var diffDayCount = (endDateMoment - startDateMoment) / oneDayMs + 1;

      for (let index = 1; index <= diffDayCount; index++) {
        var dateData = await this.findBy(
          "date",
          moment(startDate, "DD-MM-YYYY").utc().startOf("day").add(index, "day")
        );
        if (dateData == null || dateData.length == 0) {
          await this.insert({
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
