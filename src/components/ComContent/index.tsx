import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout } from "antd";
const { Content } = Layout;
import A from "@/views/a";
import B from "@/views/b";
import Father from "@/views/father";
import Table from "@/views/components/table/index";
import Card from "@/views/components/card/index";
import Date from "@/views/components/sub/date/index";

import "./index.less";
const contentStyle: React.CSSProperties = {
  overflow: "auto",
  padding: "20px",
  boxSizing: "border-box",
};
export default function ComMenu() {
  return (
    <Content style={contentStyle}>
      <TransitionGroup>
        <CSSTransition timeout={500} classNames="fade" unmountOnExit>
          <Switch>
            <Redirect exact from="/layout" to="/layout/a" />
            <Route exact path="/layout/a" component={A} />
            <Route exact path="/layout/b" component={B} />
            <Route exact path="/layout/father" component={Father} />
            <Route exact path="/layout/components/table" component={Table} />
            <Route exact path="/layout/components/card" component={Card} />
            <Redirect
              exact
              from="/layout/components"
              to="/layout/components/table"
            />
            <Route exact path="/layout/components/sub/date" component={Date} />
            <Redirect
              exact
              from="/layout/components/sub"
              to="/layout/components/sub/date"
            />
            {/* <Route path="*" component={NotFound} /> */}
            <Redirect to="/404" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  );
}
