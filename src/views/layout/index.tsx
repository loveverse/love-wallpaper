import React from "react";
import { Layout } from "antd";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import "./index.less";
import ComSider from "@/components/ComSider";
import ComHeader from "@/components/ComHeader";
import ComContent from "@/components/ComContent";
const items = [
  {
    path: "/layout/a",
    breadcrumbname: "A",
    key: "/layout/a",
    icon: <UserOutlined />,
    label: "A",
  },
  {
    path: "/layout/b",
    breadcrumbname: "B",
    key: "/layout/b",
    icon: <UploadOutlined />,
    label: "B",
  },
  {
    path: "/layout/father",
    breadcrumbname: "Father",
    key: "/layout/father",
    icon: <UploadOutlined />,
    label: "Father",
  },
  {
    path: "/layout/components",
    breadcrumbname: "组件",
    key: "/layout/components",
    icon: <UploadOutlined />,
    label: "组件",
    children: [
      {
        path: "/layout/components/table",
        breadcrumbname: "表格",
        key: "/layout/components/table",
        icon: <UploadOutlined />,
        label: "表格",
      },
      {
        path: "/layout/components/card",
        breadcrumbname: "卡片",
        key: "/layout/components/card",
        icon: <UploadOutlined />,
        label: "卡片",
      },
    ],
  },
];
export default function App() {
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
