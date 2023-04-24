import React from "react";
import { Breadcrumb, Layout } from "antd";
import { Link, useLocation } from "react-router-dom";
const { Header } = Layout;
import "./index.less";
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const ComHeader: React.FC<any> = ({ routes }) => {
  const location = useLocation();

  // 根据当前路由路径获取路由配置
  const getRoute = (pathname: string) => {
    const match = routes.find((item: any) => {
      return pathname.includes(item.path);
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
    if (location.pathname.includes(route.path)) {
      breadcrumbs.push(route);
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

  return (
    <Header style={headerStyle}>
      <Breadcrumb className="item">
        <Breadcrumb.Item className="sub_item">
          <Link to="/">首页</Link>
        </Breadcrumb.Item>
        {breadcrumbs.map((item: any, index: number) => {
          return (
            <Breadcrumb.Item key={index}>
              <Link to={route.path}>{item.path}</Link>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </Header>
  );
};

export default ComHeader;
