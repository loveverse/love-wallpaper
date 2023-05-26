import React from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { useNavigate, useLocation } from "react-router-dom";

export default function ComSider(props: any) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Sider
      theme="light"
      style={{ height: "100%", overflow: "auto" }}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="logo">love后台模板</div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={[location.pathname]}
        items={props.items}
        onClick={({ key }) => {
          if (location.pathname !== key) {
            navigate(key);
          }
        }}
      />
    </Sider>
  );
}
