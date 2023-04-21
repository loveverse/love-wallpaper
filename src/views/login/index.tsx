import React from "react";
import { Redirect } from "react-router-dom";
export default function Login() {
  const token = "1";
  if (token) {
    return <Redirect to="/layout" />;
  }
  return <div>登录页面</div>;
}
