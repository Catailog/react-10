import { Outlet } from 'react-router';

import Header from '@/lectures/lecture26-exercise/components/header/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}
