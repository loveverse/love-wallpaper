import React from "react";
import { Navigate, Outlet, useRoutes, Route } from "react-router-dom";
import { RouteObject } from "./tyes";
import Login from "@/views/login/index";
import Layout from "@/views/layout";
import A from "@/views/a";
import B from "@/views/b";
import Father from "@/views/father";
import Table from "@/views/components/table";
import Card from "@/views/components/card";
import Date from "@/views/components/sub/date";
import Form from "@/views/components/sub/form";
import NotFound from "@/views/notFound";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

// 导入所有router
// const metaRoutes = import.meta.glob("./modules/*.tsx");
// const { token } = useSelector((state: RootState) => state.add);

// 路由表
export const Routers: RouteObject[] = [
  {
    path: "/a",
    element: <A />,
    meta: {
      title: "A",
      requiresAuth: true,
    },
  },
  {
    path: "/b",
    element: <B />,
    meta: {
      title: "B",
      requiresAuth: true,
    },
  },
  {
    path: "/father",
    element: <Father />,
    meta: {
      title: "father",
      requiresAuth: true,
    },
  },
  {
    path: "/components",
    element: <h1>111</h1> || <Navigate to="/components/table" />,
    children: [
      {
        path: "/components/table",
        element: <Table />,
        meta: {
          title: "表格",
          requiresAuth: true,
        },
      },
      {
        path: "/components/card",
        element: <Card />,
        meta: {
          title: "卡片",
        },
      },
      {
        path: "/components/sub",
        // element: <Navigate to="/notFound" />,
        children: [
          {
            path: "/components/sub/date",
            element: <Date />,
          },
          {
            path: "/components/sub/form",
            element: <Form />,
          },
        ],
      },
    ],
  },
];
// 过滤路由表
const asyncRouter: RouteObject[] = [];

// 根路由
export const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login",
    },
  },
  {
    element: <Layout />,
    children: Routers,
  },
  {
    path: "/notFound",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/notFound" />,
  },
];
const recursionRoute = (routes: RouteObject[]) => {
  return routes.map((item, index) => {
    return (
      <Route path={item.path} key={index} element={item.element}>
        {item.children && recursionRoute(item.children)}
      </Route>
    );
  });
};

export const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};
export const routers = recursionRoute(Routers);
// export const recursionItems = (routes = Routers) => {
//   return routes.map((item) => {
//     const route = item.children
//       ? recursionItems(item.children)
//       : {
//           key: item.path,
//           path: item.path,
//           href: item.path,
//           title: item?.meta?.title || "空标题",
//           // icon: <UserOutlined />,
//           label: item?.meta?.title || "空标题",
//         };
//     return route;
//   });
// };
export const routes = recursionRoute(rootRouter);
