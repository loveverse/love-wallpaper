import React from "react";
import { useLocation, Navigate } from "react-router-dom";

import { useSelector, RootState } from "@/store";
import { searchRoute } from "@/utils/index";
import { rootRouter } from "./index";
const AuthRouter = ( props: { children: JSX.Element }) => {
  const { pathname } = useLocation();
  // 跳转路由前，清除所有请求
  const route = searchRoute(pathname, rootRouter);
  // 判断当前路由是否需要访问权限
  if (!route.meta?.requiresAuth) return props.children;
  const { token } = useSelector((state: RootState) => state.add);
  if (!token) return <Navigate to="/login" replace />;
};
