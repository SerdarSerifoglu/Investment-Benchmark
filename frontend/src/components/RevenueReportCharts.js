import { Bar } from "react-chartjs-2";
import {
  RevenueReportData,
  RevenueReportFilter,
} from "../redux/reportFilters/reportFiltersSlice";
import { useSelector } from "react-redux";

const RevenueReportCharts = () => {
  const reportData = useSelector(RevenueReportData);
  const revenueReportFilter = useSelector(RevenueReportFilter);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${revenueReportFilter.startDate ?? "xxxx"} - ${
          revenueReportFilter.endDate ?? "xxxx"
        } tarihleri arasında ${
          revenueReportFilter.investmentAmount ?? "0"
        } ₺ yatırımın getirisi `,
      },
    },
  };

  const labels = " ";
  let colors = ["red", "orange", "gray", "green", "yellow", "purple"];

  var datasets = [];

  reportData.forEach((e, index) => {
    var dataset = {};
    dataset.label = e.investTypeValue;
    dataset.data = [e.lastValueTL];
    dataset.backgroundColor = colors[index];
    datasets.push(dataset);
  });

  const data = {
    labels,
    datasets: datasets,
  };
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default RevenueReportCharts;
