import React, { useState } from "react";
import { Layout } from "antd";
// import { SyncOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
// import ClassDemo from "./class";
import ClassDemo from "./class";
import Controlled from "./controlled";
import List from "./中间人模式";

function Main() {
  const obj = {
    title: "列表",
    leftShow: true,
    rightShow: true,
  };
  const [count, setCount] = useState(0);
  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <Header>
        {/* <SyncOutlined /> */}
      </Header>
      {/* <SyncOutlined /> */}
      <Content onClick={() => setCount(count + 1)}>
      <List></List>
        {/* <ClassDemo></ClassDemo>
        <div>
          <h2>首页</h2>
          <Navbar leftShow={false} rightShow={false} />
        </div>
        <div>
          <h2>列表</h2>
          <Navbar {...obj} />
        </div>
        <div>
          <h2>购物车</h2>
          <Navbar title="购物车" leftShow={true} rightShow={false} />
        </div>
        <Controlled></Controlled> */}
      </Content>
      <Footer>Footer{count}</Footer>
    </Layout>
  );
}
export default Main;
