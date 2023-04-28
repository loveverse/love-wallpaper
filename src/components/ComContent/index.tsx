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
import NotFound from "@/views/notFound";
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
          <Routes>
            <Route path="a" element={<A />} />
            <Route path="b" element={<B />} />
            <Route path="father" element={<Father />} />
            <Route path="components">
              <Route path="table" element={<Table />} />
              <Route path="card" element={<Card />} />
              <Route path="sub">
                <Route path="date" element={<Date />} />
                <Route path="form" element={<Form />} />
              </Route>
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  );
}
