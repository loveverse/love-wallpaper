import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import "@/assets/css/reset.less";
import "./main.less";
import Router from "./router";
import { store } from "./store/index";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
