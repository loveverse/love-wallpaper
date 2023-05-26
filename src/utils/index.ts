import { RouteObject } from "@/router/tyes";
// 递归查询对应的路由
export const searchRoute = (
  path: string,
  routes: RouteObject[] = []
): RouteObject => {
  let result: RouteObject = {};
  for (const item of routes) {
    if (item.path === path) {
      return item;
    }
    if (item.children) {
      const res = searchRoute(path, item.children);
      if (Object.keys(res).length) {
        result = res;
      }
    }
  }
  return result;
};
