import { BrowserRouter, Routes, Route } from "react-router-dom";
import CumulativeReport from "./pages/CumulativeReport";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import Date from "./pages/admin/Date";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/main-page" element={<MainPage />} />
          <Route path="/cumulative-report" element={<CumulativeReport />} />
          <Route path="/admin/date" element={<Date />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
