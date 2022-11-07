import React, { useState } from "react";
import { Layout } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import ClassDemo from "./class";
import Controlled from "./controlled";

function Main() {
  const [count, setCount] = useState(0);
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header>
        {/* <SyncOutlined /> */}
      </Header>
      {/* <SyncOutlined /> */}
      <Content onClick={() => setCount(count + 1)}>
        <ClassDemo></ClassDemo>
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
        <Controlled></Controlled>
      </Content>
      <Footer>Footer{count}</Footer>
    </Layout>
  );
}
export default Main;
