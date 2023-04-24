import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { routes } from './routes';

function Breadcrumbs() {
  const location = useLocation();

  // 根据当前路由的路径获取对应的路由配置
  const getRoute = (pathname) => {
    const match = routes.find((route) => {
      return route.path === pathname;
    });
    return match || {};
  };

  // 根据路由配置生成面包屑导航
  const createBreadcrumbs = (route) => {
    const breadcrumbs = [];

    if (!route.name) {
      return breadcrumbs;
    }

    breadcrumbs.push(
      <Breadcrumb.Item key={route.path}>
        <Link to={route.path}>{route.name}</Link>
      </Breadcrumb.Item>
    );

    if (route.routes) {
      route.routes.forEach((childRoute) => {
        breadcrumbs.push(...createBreadcrumbs(childRoute));
      });
    }

    return breadcrumbs;
  };

  const route = getRoute(location.pathname);
  const breadcrumbs = createBreadcrumbs(route);

  return <Breadcrumb>{breadcrumbs}</Breadcrumb>;
}

export default Breadcrumbs;