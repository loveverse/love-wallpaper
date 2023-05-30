import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { getOpenKeys } from "@/utils/index";

export default function ComSider(props: any) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  // 刷新页面保持高亮
  useEffect(() => {
    setSelectedKeys([pathname]);
    setOpenKeys(getOpenKeys(pathname));
  }, [pathname]);
  // 设置当前展开的subMenu
  const onOpenChange = (openKeys: string[]) => {
    if (openKeys.length === 0 || openKeys.length === 1) {
      return setOpenKeys(openKeys);
    }
    const latestOpenKey = openKeys[openKeys.length - 1];
    if (latestOpenKey.includes(openKeys[0])) {
      return setOpenKeys(openKeys);
    }
    setOpenKeys([latestOpenKey]);
  };
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
        triggerSubMenuAction="click"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        items={props.items}
        onClick={({ key }) => {
          if (location.pathname !== key) {
            navigate(key);
          }
        }}
        onOpenChange={onOpenChange}
      />
    </Sider>
  );
}
