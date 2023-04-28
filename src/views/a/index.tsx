import React from "react";
import { Card } from "antd";
const { Meta } = Card;
export default function A() {
  return (
    <div style={{ height: "100%" }}>
      <Card hoverable style={{ width: 240 }}>
        <Meta title="启动环境" description="https://cn.vitejs.dev/" />
        <p>环境名:{import.meta.env.VITE_NAME}</p>
        <p>参数: {import.meta.env.MODE}</p>
      </Card>
    </div>
  );
}
