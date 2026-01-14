import { BrowserRouter, Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';

export default function App() {
  const Layout = lazy(() => import('./components/Layout'));
  const Home = lazy(() => import('./pages/Home'));
  const NotFound = lazy(() => import('./pages/NotFound'));
  const Lecture01 = lazy(() => import('./pages/lecture01/Lecture01'));
  const Lecture03Ex = lazy(() => import('./pages/lecture03-exercise/Lecture03Ex'));
  const Lecture06 = lazy(() => import('./pages/lecture06/Lecture06'));
  const Lecture07 = lazy(() => import('./pages/lecture07/Lecture07'));

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Layout이 있는 페이지 */}
          <Route element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="lecture01" element={<Lecture01 />}></Route>
            <Route path="lecture03Ex" element={<Lecture03Ex />}></Route>
            <Route path="lecture06" element={<Lecture06 />}></Route>
            <Route path="lecture07" element={<Lecture07 />}></Route>
          </Route>

          {/* 404 페이지 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
