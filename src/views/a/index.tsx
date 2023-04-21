import React from "react";
import { Calendar } from "antd";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";

export default function A() {
  const onPanelChange = (value: any, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <div style={{ height: "100%" }}>
      <Calendar onPanelChange={onPanelChange}></Calendar>
    </div>
  );
}
