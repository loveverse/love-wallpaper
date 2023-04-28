import React from "react";
import {
  HashRouter,
  Route,
  Routes,
  Navigate,
  RouteObject,
  createHashRouter,
  BrowserRouter,
} from "react-router-dom";
// import Login from "@/views/login/index";

import App from "@/views/index";
import { Login, NotFound } from "./lazy";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

// const token = "1";
// export const notFoundPage = [
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ];
// export const baseRouter: RouteObject[] = [
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/",
//     element: token ? <App /> : <Navigate to="/login" />,
//   },
// ];
// export default createHashRouter(baseRouter);

export default function Router() {
  const { token } = useSelector((state: RootState) => state.add);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* 模糊匹配，没登录时，任何路由都是login */}
        <Route path="/*" element={token ? <App /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
