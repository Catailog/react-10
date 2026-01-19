import { Suspense, lazy } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router';

export default function App() {
  const Layout = lazy(() => import('@/components/Layout'));
  const Home = lazy(() => import('@/lectures/Home'));
  const NotFound = lazy(() => import('@/lectures/NotFound'));
  const Lecture01 = lazy(() => import('@/lectures/lecture01/Lecture01'));
  const Lecture03Ex = lazy(() => import('@/lectures/lecture03-exercise/Lecture03Ex'));
  const Lecture04 = lazy(() => import('@/lectures/lecture04/Lecture04'));
  const Lecture05Home = lazy(() => import('@/lectures/lecture05/pages/Home'));
  const Lecture05About = lazy(() => import('@/lectures/lecture05/pages/About'));
  const Lecture05MyInfo = lazy(() => import('@/lectures/lecture05/pages/MyInfo'));
  const Lecture05Etc = lazy(() => import('@/lectures/lecture05/pages/Etc'));
  const Lecture05ConcertsHome = lazy(() => import('@/lectures/lecture05/pages/ConcertsHome'));
  const Lecture05Trending = lazy(() => import('@/lectures/lecture05/pages/Trending'));
  const Lecture05City = lazy(() => import('@/lectures/lecture05/pages/City'));
  const Lecture05Layout = lazy(() => import('@/lectures/lecture05/components/Layout'));
  const Lecture05Layout02 = lazy(() => import('@/lectures/lecture05/components/Layout02'));
  const Lecture06 = lazy(() => import('@/lectures/lecture06/Lecture06'));
  const Lecture07 = lazy(() => import('@/lectures/lecture07/Lecture07'));
  const Lecture09Ex = lazy(() => import('@/lectures/lecture09-exercise/Lecture09Ex'));
  const Lecture15 = lazy(() => import('@/lectures/lecture15/pages/ContextPage'));
  const Lecture15Ex = lazy(() => import('@/lectures/lecture15-exercise/ThemeApp'));
  const Lecture15Ex02 = lazy(() => import('@/lectures/lecture15-exercise02/ThemeApp'));

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Layout이 있는 페이지 */}
          <Route element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="lecture01" element={<Lecture01 />}></Route>
            <Route path="lecture03Ex" element={<Lecture03Ex />}></Route>
            <Route path="lecture04" element={<Lecture04 />}></Route>
            <Route path="lecture05/*" element={<Lecture05Layout />}>
              <Route index element={<Lecture05Home />} />
              <Route path="about" element={<Lecture05About />} />
              <Route path="my-info" element={<Lecture05MyInfo />} />
              <Route path="etc" element={<Lecture05Etc />} />

              <Route path="concerts/*" element={<Lecture05Layout02 />}>
                <Route index element={<Lecture05ConcertsHome />} />
                <Route path="trending" element={<Lecture05Trending />} />
                <Route path="city/:city" element={<Lecture05City />} />
              </Route>
            </Route>
            <Route path="lecture06" element={<Lecture06 />}></Route>
            <Route path="lecture07" element={<Lecture07 />}></Route>
            <Route path="lecture09Ex" element={<Lecture09Ex />}></Route>
            <Route path="lecture15" element={<Lecture15 />}></Route>
            <Route path="lecture15Ex" element={<Lecture15Ex />}></Route>
            <Route path="lecture15Ex02" element={<Lecture15Ex02 />}></Route>
          </Route>

          {/* 404 페이지 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
