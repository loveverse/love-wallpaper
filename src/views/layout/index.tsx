import React from "react";
import { Layout } from "antd";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import "./index.less";
import ComSider from "./components/ComSider";
import ComHeader from "./components/ComHeader";
import ComContent from "./components/ComContent";
// import { Routers } from "@/router/index";
// const recursionItems = (routes) => {
//   Routers.map(item => {
//     if(item.children){
//       recursionItems(item.children)
//     }else{
//       return {
//         key: item.path,
//         path: item.path,
//         href: item.path,
//         title: item?.meta?.title || '空标题',
//         icon: <UserOutlined />,
//         label: item?.meta?.title || '空标题'
//       }
//     }
//   })
// };
const items = [
  {
    key: "/a",
    path: "/a",
    title: "A",
    href: "/a",
    icon: <UserOutlined />,
    label: "A",
  },
  {
    key: "/b",
    path: "/b",
    title: "B",
    href: "/b",
    icon: <UploadOutlined />,
    label: "B",
  },
  {
    key: "/father",
    path: "/father",
    title: "Father",
    href: "/father",
    icon: <UploadOutlined />,
    label: "Father",
  },
  {
    key: "/components",
    path: "/components",
    title: "组件",
    href: "/components",
    icon: <UploadOutlined />,
    label: "组件",
    children: [
      {
        key: "/components/table",
        path: "/components/table",
        title: "表格",
        href: "/components/table",
        icon: <UploadOutlined />,
        label: "表格",
      },
      {
        key: "/components/card",
        path: "/components/card",
        title: "卡片",
        href: "/components/card",
        icon: <UploadOutlined />,
        label: "卡片",
      },
      {
        key: "/components/sub",
        path: "/components/sub",
        title: "子组件",
        href: "/components/sub",
        icon: <UploadOutlined />,
        label: "子组件",
        children: [
          {
            key: "/components/sub/date",
            path: "/components/sub/date",
            title: "子组件时间",
            href: "/components/sub/date",
            icon: <UploadOutlined />,
            label: "子组件时间",
          },
          {
            key: "/components/sub/form",
            path: "/components/sub/form",
            title: "子组件表单",
            href: "/components/sub/form",
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
        {/* <ComContent /> */}
      </Layout>
    </Layout>
  );
}
