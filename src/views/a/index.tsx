import React from "react";
import { Space, Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
export default function A() {
  const columns: ColumnsType<DataType> = [{}];
  const data: DataType[] = [];

  return (
    <div style={{ height: "100%" }}>
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary">添加</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
