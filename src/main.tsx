import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import "./config";
import zhCN from "antd/es/locale/zh_CN";
import enUS from "antd/es/locale/en_US";
import "./main.less";
import { store } from "./store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // react严格模式
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
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
