import React from "react";
import { Breadcrumb, Layout, Tooltip } from "antd";
import {
  ExpandOutlined,
  SettingOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
const { Header } = Layout;
import "./index.less";

const ComHeader: React.FC<any> = ({ routes }) => {
  const location = useLocation();
  console.log(routes);

  // 根据当前路由路径获取路由配置
  const getRoute = (pathname: string) => {
    const match = routes.find((item: any) => {
      return pathname.includes(item.key);
      // return item.path === pathname;
    });
    return match || {};
  };
  // 根据路由配置生成导航
  const createBreadcrumbs = (route: any, breadcrumbs: any = []) => {
    // 判断是否存在路由名
    if (!route.label) {
      return breadcrumbs;
    }
    if (location.pathname.includes(route.key)) {
      const obj = route.children
        ? {
            title: route.title,
            href: route.children[0].path, // 需要重定向到第一个
          }
        : { title: route.title };
      breadcrumbs.push(obj);
    }
    if (route.children) {
      route.children.forEach((childRoute: any) => {
        // if (childRoute.path === location.pathname) {
        createBreadcrumbs(childRoute, breadcrumbs);
        // }
      });
    }
    return breadcrumbs;
  };
  const route = getRoute(location.pathname);
  const breadcrumbs = createBreadcrumbs(route);

  const breadcrumItems = [
    {
      title: "首页",
      href: "/",
    },
  ].concat(breadcrumbs);

  return (
    <Header className="header_box">
      <Breadcrumb items={breadcrumItems} className="item" />
      <div className="header_right">
        <Tooltip placement="bottom" title="全屏">
          <ExpandOutlined />
        </Tooltip>
        <RetweetOutlined />
        <SettingOutlined
          onClick={() => {
            console.log(11);
          }}
        />
      </div>
    </Header>
  );
};

export default ComHeader;
