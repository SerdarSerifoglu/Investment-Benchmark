import { Line } from "react-chartjs-2";
import {
  InvestmentToolsFilter,
  InvestmentToolsData,
} from "../redux/reportFilters/reportFiltersSlice";
import { useSelector } from "react-redux";

const InvestmentToolsChart = () => {
  const reportData = useSelector(InvestmentToolsData);
  const reportFilter = useSelector(InvestmentToolsFilter);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Yatırım Araçları Tarihsel Grafik",
      },
    },
  };

  var datasets = [];
  let colors = ["red", "orange", "gray", "green", "yellow", "purple"];

  if (reportData.length > 0) {
    reportFilter.investmentType.forEach((e, index) => {
      let dataset = {};
      dataset.label = e;
      dataset.data = reportData.map((rd) => rd.values[e]);
      dataset.borderColor = colors[index];
      datasets.push(dataset);
    });

    const labels = reportData.map((e) => e.dateString);
    const data = {
      labels,
      datasets: datasets,
    };

    return <Line options={options} data={data} />;
  }
  return <></>;
};

export default InvestmentToolsChart;
