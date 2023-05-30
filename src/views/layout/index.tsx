import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import "./index.less";
import ComSider from "./components/ComSider";
import ComHeader from "./components/ComHeader";
import ComContent from "./components/ComContent";
import { useRouterItems } from "@/router/index";

export default function App() {
  const items = useRouterItems();

  return (
    <Layout style={{ width: "100%", height: "100%" }}>
      <ComSider items={items} />
      <Layout>
        <ComHeader routes={items} />
        <ComContent />
      </Layout>
    </Layout>
  );
}
