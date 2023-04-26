import React from "react";
import { Layout } from "antd";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import "./index.less";
import ComSider from "@/components/ComSider";
import ComHeader from "@/components/ComHeader";
import ComContent from "@/components/ComContent";
const items = [
  {
    key: "/layout/a",
    path: "/layout/a",
    title: "A",
    href: "/layout/a",
    icon: <UserOutlined />,
    label: "A",
  },
  {
    key: "/layout/b",
    path: "/layout/b",
    title: "B",
    href: "/layout/b",
    icon: <UploadOutlined />,
    label: "B",
  },
  {
    key: "/layout/father",
    path: "/layout/father",
    title: "Father",
    href: "/layout/father",
    icon: <UploadOutlined />,
    label: "Father",
  },
  {
    key: "/layout/components",
    path: "/layout/components",
    title: "组件",
    href: "/layout/components",
    icon: <UploadOutlined />,
    label: "组件",
    children: [
      {
        key: "/layout/components/table",
        path: "/layout/components/table",
        title: "表格",
        href: "/layout/components/table",
        icon: <UploadOutlined />,
        label: "表格",
      },
      {
        key: "/layout/components/card",
        path: "/layout/components/card",
        title: "卡片",
        href: "/layout/components/card",
        icon: <UploadOutlined />,
        label: "卡片",
      },
      {
        key: "/layout/components/sub",
        path: "/layout/components/sub",
        title: "子组件",
        href: "/layout/components/sub",
        icon: <UploadOutlined />,
        label: "子组件",
        children: [
          {
            key: "/layout/components/sub/date",
            path: "/layout/components/sub/date",
            title: "子组件时间",
            href: "/layout/components/sub/date",
            icon: <UploadOutlined />,
            label: "子组件时间",
          },
          {
            key: "/layout/components/sub/form",
            path: "/layout/components/sub/form",
            title: "子组件表单",
            href: "/layout/components/sub/form",
            icon: <UploadOutlined />,
            label: "子组件表单",
          },
        ],
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
