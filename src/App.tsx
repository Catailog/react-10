import { Suspense, lazy } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router';

import { type RouteType, routes } from '@/routes/routes';

export default function App() {
  const Layout = lazy(() => import('@/components/Layout'));
  const NotFound = lazy(() => import('@/lectures/NotFound'));
  const renderRoutes = (routes: RouteType[]) =>
    routes.map((route) => {
      if ('children' in route && route.children) {
        return (
          <Route key={route.path} path={route.path} element={<route.element />}>
            {renderRoutes(route.children)}
          </Route>
        );
      }
      return (
        <Route key={route.path} path={route.path} index={route.index} element={<route.element />} />
      );
    });

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>{renderRoutes(routes)}</Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
