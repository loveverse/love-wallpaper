import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Card, Form, Input, Checkbox, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store";
import { setToken } from "@/store/addReducer";
export default function Login() {
  const { token } = useSelector((state: RootState) => state.add);

  if (token) {
    return <Navigate to="/a" replace />;
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div style={{ height: "100%" }}>
      <Card style={{ height: "100%" }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, textAlign: "center", margin: "0 auto" }}
          initialValues={{ remember: true }}
          onFinish={() => {
            dispatch(setToken("1"));
            navigate("/layout");
          }}
          onFinishFailed={() => {
            console.log("[ 2 ] >", 2);
          }}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>记住</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
