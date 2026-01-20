import { type RouteType, routes } from '@/routes/routes';

import { NavLinkItem } from './NavLinkItem';

const navRoutes = extractNavRoutes(routes);

export function Header() {
  return (
    <header className="bg-amber-500">
      <nav className="container mx-auto flex gap-2 overflow-x-scroll">
        {navRoutes.map((route) => (
          <NavLinkItem key={route.to} to={route.to}>
            {route.label}
          </NavLinkItem>
        ))}
      </nav>
    </header>
  );
}

type NavRoute = {
  to: string;
  label: string;
};

function extractNavRoutes(routes: RouteType[], parentPath = ''): NavRoute[] {
  return routes.flatMap((route) => {
    if (!route.path || route.hideInNav || !route.label) return [];

    const fullPath = route.path === '/' ? '/' : `${parentPath}/${route.path}`.replace(/\/+/g, '/');

    const current: NavRoute = {
      to: fullPath.replace('/*', ''),
      label: route.label,
    };

    const children = route.children
      ? extractNavRoutes(route.children, fullPath.replace('/*', ''))
      : [];

    return [current, ...children];
  });
}
