import CumulativeReportFilter from "../components/CumulativeReportFilter";
import CumulativeReportList from "../components/CumulativeReportList";
import CumulativeReportSummary from "../components/CumulativeReportSummary";

const CumulativeReport = () => {
  return (
    <>
      <br />
      <CumulativeReportFilter />
      <br />
      <CumulativeReportSummary />
      <br />
      <CumulativeReportList />
    </>
  );
};

export default CumulativeReport;
