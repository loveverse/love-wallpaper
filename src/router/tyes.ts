interface MetaPorps {
  keepAlive?: boolean;
  requiresAuth?: boolean;
  title?: string;
  key?: string;
}

export interface RouteObject {
  children?: RouteObject[];
  element?: React.ReactNode;
  // index?: boolean;
  path?: string;
  // 接口不能扩展/继承联合类型
  meta?: MetaPorps;
  isLink?: string;
}