import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./layout";
import NotFound from "./notFound";

export default function App() {
  return (
    <Switch>
      {/* 路由逻辑：
            没登录时，只能跳转到登录，不存在404；
            登录后，存在404和默认路径/，/重定向到home，重新回到login还是到当前页面
        */}
      <Redirect exact from="/" to="/layout" />
      <Route path="/layout" component={Layout} />
      <Route path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  );
}
