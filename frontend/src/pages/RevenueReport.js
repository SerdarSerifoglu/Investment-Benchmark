import RevenueReportFilter from "../components/RevenueReportFilter";
import RevenueReportCharts from "../components/RevenueReportCharts";
import RevenueReportList from "../components/RevenueReportList";

const RevenueReport = () => {
  return (
    <>
      <br />
      <RevenueReportFilter />
      <RevenueReportCharts />
      <RevenueReportList />
    </>
  );
};

export default RevenueReport;
