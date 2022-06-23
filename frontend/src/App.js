import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CumulativeReport from "./pages/CumulativeReport";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/cumulative-report" element={<CumulativeReport />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
