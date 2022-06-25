import React from "react";
import App from "./App";
import { render } from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
