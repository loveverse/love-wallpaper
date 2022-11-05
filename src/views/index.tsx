import React, { useState } from "react";
import { Layout } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import ClassDemo from "./class";

function Main() {
  const [count, setCount] = useState(0);
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header>
        {/* <ClassDemo></ClassDemo> */}
        {/* <SyncOutlined /> */}
      </Header>
      {/* <SyncOutlined /> */}
      <Content onClick={() => setCount(count + 1)}>
        <div>
          <h2>首页</h2>
          <Navbar title="首页" />
        </div>
        <div>
          <h2>列表</h2>
          <Navbar title="列表" />
        </div>
        <div>
          <h2>购物车</h2>
          <Navbar title="购物车" />
        </div>
      </Content>
      <Footer>Footer{count}</Footer>
    </Layout>
  );
}
export default Main;
