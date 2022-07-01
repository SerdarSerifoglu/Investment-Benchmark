import { Bar } from "react-chartjs-2";
import { RevenueReportData } from "../redux/reportFilters/reportFiltersSlice";
import { useSelector } from "react-redux";

const RevenueReportCharts = () => {
  const reportData = useSelector(RevenueReportData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "xxxxx Tarihindeki ₺ ",
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
  datasets = datasets.sort(
    (a, b) => Number(b.lastValueTL) - Number(a.lastValueTL)
  );
  const data = {
    labels,
    datasets: datasets,
  };
  return (
    <>
      <Bar options={options} data={chartData} />
    </>
  );
};

export default RevenueReportCharts;
