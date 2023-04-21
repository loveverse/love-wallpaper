import React from "react";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { useHistory } from "react-router-dom";

const items = [
  {
    key: "/layout/a",
    icon: <UserOutlined />,
    label: "A",
    // children: [],
  },
  {
    key: "/layout/b",
    icon: <UploadOutlined />,
    label: "B",
    // children: [],
  },
];

export default function ComSider() {
  const history = useHistory();

  return (
    <Sider
      theme="light"
      style={{ height: "100%" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo">love后台模板</div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[history.location.pathname]}
        items={items}
        onClick={({ key, keyPath, domEvent }) => {
          if (history.location.pathname === key) {
            return;
          }
          history.push(key);
          console.log(history.location);
        }}
      />
    </Sider>
  );
}
