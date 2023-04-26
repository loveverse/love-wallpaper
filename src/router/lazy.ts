import { lazy } from "react";
export const App = lazy(() => import("@/views/index"));
export const Login = lazy(() => import("@/views/login"));
export const A = lazy(() => import("@/views/a"));
export const B = lazy(() => import("@/views/b"));
export const Father = lazy(() => import("@/views/father"));
export const Table = lazy(() => import("@/views/components/table"));
export const Card = lazy(() => import("@/views/components/card"));
export const Date = lazy(() => import("@/views/components/sub/date"));
