import { DatePicker } from "antd";
import React from "react";

export default function Date() {
  return (
    <>
      <DatePicker onChange={() => {
        console.log(1)
      }} />
      </>
  );
}
