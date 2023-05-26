import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Routes, Route, useRoutes, Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;
// import { Routers } from "@/router/index";
import "./index.less";
const contentStyle: React.CSSProperties = {
  overflow: "auto",
  padding: "20px",
  boxSizing: "border-box",
};

export default function ComContent() {
  // const recursionRoute = (routes = Routers) => {
  //   routes.map((item) => {
  //     const route = item.children ? (
  //       <Route>{recursionRoute(item.children)}</Route>
  //     ) : (
  //       <Route path={item.path} key={item.path} element={item.element} />
  //     );
  //     return route;
  //   });
  // };
  // const a = recursionRoute();

  return (
    <Content style={contentStyle}>
      {/* <TransitionGroup> */}
      {/* <CSSTransition timeout={500} classNames="fade" unmountOnExit> */}
      <Outlet></Outlet>
      {/* </CSSTransition> */}
      {/* </TransitionGroup> */}
    </Content>
  );
}
