import React from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";

export default function LayoutIndex() {
  const location = useLocation();
  const params = useParams();

  if (location.pathname === "/components") {
    return <Navigate to="/components/table" />;
  }
  return <Outlet />;
}
