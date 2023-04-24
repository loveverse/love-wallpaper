import React, { useEffect } from "react";

import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { useHistory } from "react-router-dom";

export default function ComSider(props: any) {
  const history = useHistory();
  // console.log(props);

  return (
    <Sider
      theme="light"
      style={{ height: "100%" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        // console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        // console.log(collapsed, type);
      }}
    >
      <div className="logo">love后台模板</div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[history.location.pathname]}
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
