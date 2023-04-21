import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;
import A from "@/views/a";
import B from "@/views/b";
import NotFound from "@/views/notFound";

export default function ComMenu() {
  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };
  return (
    <Content style={contentStyle}>
      <Switch>
        <Redirect exact from="/layout" to="/layout/a" />
        <Route exact path="/layout/a" component={A} />
        <Route exact path="/layout/b" component={B} />
        {/* <Route path="*" component={NotFound} /> */}
        <Redirect to="/404" />
      </Switch>
    </Content>
  );
}
