import { useSelector } from "react-redux";
import { CumulativeReportData } from "../redux/reportFilters/reportFiltersSlice";

const CumulativeReportSummary = () => {
  const reportData = useSelector(CumulativeReportData);

  return reportData.total == null ? (
    ""
  ) : (
    <>
      <div>{`Toplam Birikim Tutarı (₺): ${reportData.total.investmentAmount}`}</div>
      <div>{`Son Tarihteki Birikim Toplam Değeri (₺): ${reportData.total.lastDateInvestmentValue}`}</div>
      <div>{`Elde Edilen Değer Artışı (%): ${reportData.total.revenueRate}`}</div>
    </>
  );
};

export default CumulativeReportSummary;
