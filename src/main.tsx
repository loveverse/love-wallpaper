import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
// import "antd"

import zhCN from "antd/es/locale/zh_CN";

import "./main.less";
import Router from "./router";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Router />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
