import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout";
import NotFound from "./notFound";

const App: React.FC = () => {
  return (
    <Routes>
      {/* 路由逻辑：
            没登录时，只能跳转到登录，不存在404；
            登录后，存在404和默认路径/，/重定向到home，重新回到login还是到当前页面
        */}

      <Route path="/" element={<Navigate to="/layout" replace />} />
      <Route path="/layout" element={<Navigate to="/layout/a" replace />} />
      {/* 这里是需要全屏显示404,否则这个页面可以不需要 */}
      <Route path="/layout/*" element={<Layout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
