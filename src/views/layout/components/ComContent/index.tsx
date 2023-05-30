import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;
import "./index.less";
const contentStyle: React.CSSProperties = {
  overflow: "auto",
  padding: "20px",
  boxSizing: "border-box",
};

export default function ComContent() {
  return (
    <Content style={contentStyle}>
      <TransitionGroup>
        <CSSTransition timeout={500} classNames="fade" unmountOnExit>
          <Outlet></Outlet>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  );
}
