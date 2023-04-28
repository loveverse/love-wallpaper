import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import "./config";

import zhCN from "antd/es/locale/zh_CN";
import enUS from "antd/es/locale/en_US";
import "./main.less";
import Router from "./router";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: "#dae",
          },
        }}
      >
        <Router />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
