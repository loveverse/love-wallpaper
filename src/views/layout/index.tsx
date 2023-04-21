import React from "react";
import "@/assets/css/reset.less";
import "./index.less";
import { Layout } from "antd";
import ComSider from "@/components/ComSider";
import ComContent from "@/components/ComContent";

const { Header } = Layout;

export default function App() {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };

  return (
    <Layout style={{ width: "100%", height: "100%" }}>
      <ComSider />
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <ComContent />
      </Layout>
    </Layout>
  );
}
