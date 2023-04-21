import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "@/views/login/index";
import App from "@/views/index";

export default function Router() {
  const token = "1";
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* 模糊匹配，没登录时，任何路由都是login */}
        <Route
          path="/"
          render={() => {
            if (token) {
              return <App />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
      </Switch>
    </HashRouter>
  );
}
