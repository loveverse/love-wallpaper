import React, { useState } from "react";
import { Layout } from "antd";
import { SyncOutlined } from "@ant-design/icons";
function Main() {
  const [count, setCount] = useState(0);
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header>
        <SyncOutlined />
      </Header>
      <SyncOutlined />
      <Content onClick={() => setCount(count + 1)}>Content</Content>
      <Footer>Footer{count}</Footer>
    </Layout>
  );
}
export default Main;
