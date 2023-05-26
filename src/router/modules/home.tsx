import React from "react";
import Father from "@/views/father";
import Layout from "@/views/layout/index";
import { RouteObject } from "../tyes";
const fatherRouter: Array<RouteObject> = [
  {
    element: <Layout />,
    children: [
      {
        path: "/father",
        element: <Father />,
        meta: {
          title: "父组件",
          requiresAuth: true,
          key: "father",
        },
      },
    ],
  },
];

export default fatherRouter;
