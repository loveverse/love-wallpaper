import React from "react";

import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { useHistory,  } from "react-router-dom";
import { CollapseType } from "antd/lib/layout/Sider";

export default function ComSider(props: any) {
  const history = useHistory();
  
  return (
    <Sider
      theme="light"
      style={{ height: "100%", overflow: "auto" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken: boolean) => {
        // console.log(broken);
      }}
      onCollapse={(collapsed: boolean, type: CollapseType) => {
        // console.log(collapsed, type);
      }}
    >
      <div className="logo">love后台模板</div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[history.location.pathname]}
        defaultOpenKeys={[history.location.pathname]}
        items={props.items}
        onClick={({ key }) => {
          if (history.location.pathname !== key) {
            history.push(key);
          }
        }}
      />
    </Sider>
  );
}
