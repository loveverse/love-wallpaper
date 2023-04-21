import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout } from "antd";
const { Content } = Layout;
import A from "@/views/a";
import B from "@/views/b";

export default function ComMenu() {
  return (
    <Content
      style={{ overflow: "auto", padding: "20px", boxSizing: "border-box" }}
    >
      <TransitionGroup>
        <CSSTransition timeout={500} classNames="fade">
          <Switch>
            <Redirect exact from="/layout" to="/layout/a" />
            <Route exact path="/layout/a" component={A} />
            <Route exact path="/layout/b" component={B} />
            {/* <Route path="*" component={NotFound} /> */}
            <Redirect to="/404" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  );
}
