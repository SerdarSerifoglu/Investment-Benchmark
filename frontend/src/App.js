import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <div>Ömer Serdar ŞERİFOĞLU</div>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
