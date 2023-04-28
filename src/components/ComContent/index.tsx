import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout } from "antd";
const { Content } = Layout;
// import { A, B, Father, Table, Card, Date } from "@/router/lazy";
import A from "@/views/a";
import B from "@/views/b";
import Father from "@/views/father";
import Table from "@/views/components/table/index";
import Card from "@/views/components/card/index";
import Date from "@/views/components/sub/date/index";
import Form from "@/views/components/sub/form/index";

import "./index.less";
const contentStyle: React.CSSProperties = {
  overflow: "auto",
  padding: "20px",
  boxSizing: "border-box",
};
export default function ComMenu() {
  return (
    <Content style={contentStyle}>
      <TransitionGroup>
        <CSSTransition timeout={500} classNames="fade" unmountOnExit>
          {/* <Navigate to="/layout/a" /> */}
          <Routes>
            <Route path="/layout/a" element={<A />} />
            <Route path="/layout/b" element={<B />} />
            <Route path="/layout/father" element={<Father />} />
            <Route path="/layout/components/table" element={<Table />} />
            <Route path="/layout/components/card" element={<Card />} />
            {/* <Navigate to="/layout/components/table" /> */}
            <Route path="/layout/components/sub/date" element={<Date />} />
            <Route path="/layout/components/sub/form" element={<Form />} />
            {/* <Navigate to="/layout/components/sub/date" /> */}
            {/* <Route path="*" component={NotFound} /> */}
            {/* <Navigate to="/404" /> */}
            
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  );
}
