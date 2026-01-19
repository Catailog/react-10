import { Outlet } from 'react-router';

import { Header02 } from './Header02';

export default function Layout() {
  return (
    <>
      <Header02 />
      <main>
        <Outlet />
      </main>
    </>
  );
}
