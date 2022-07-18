import { BrowserRouter, Routes, Route } from "react-router-dom";
import CumulativeReport from "./pages/CumulativeReport";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import Date from "./pages/admin/Date";
import DataInsertFromCsv from "./pages/admin/DataInsertFromCsv";
import RevenueReport from "./pages/RevenueReport";
import InvestmentTools from "./pages/InvestmentTools";
import CsvLoad from "./pages/admin/CsvLoad";

const App = () => {
  const isAdmin = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/main-page" element={<MainPage />} />
          <Route path="/cumulative-report" element={<CumulativeReport />} />
          <Route path="/revenue-report" element={<RevenueReport />} />
          <Route path="/investment-tools" element={<InvestmentTools />} />
          {isAdmin ? (
            <>
              <Route path="/admin/date" element={<Date />} />
              <Route path="/admin/csv" element={<DataInsertFromCsv />} />
              <Route path="/admin/csv-load" element={<CsvLoad />} />
            </>
          ) : (
            ""
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
