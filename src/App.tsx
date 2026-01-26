import { Suspense, lazy } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router';

import ScrollToTop from '@/components/ScrollToTop';
import { type RouteType, routes } from '@/routes/routes';

export default function App() {
  const Layout = lazy(() => import('@/components/Layout'));
  const NotFound = lazy(() => import('@/lectures/NotFound'));
  const renderRoutes = (routeList: RouteType[]) =>
    routeList.map((route) => {
      const Element = route.element;

      const content = route.providers ? (
        route.providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, <Element />)
      ) : (
        <Element />
      );

      if (route.children) {
        return (
          <Route key={route.path} path={route.path} element={content}>
            {renderRoutes(route.children)}
          </Route>
        );
      }

      return <Route key={route.path} path={route.path} index={route.index} element={content} />;
    });

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>{renderRoutes(routes)}</Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
