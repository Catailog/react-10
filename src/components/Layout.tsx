import { Outlet } from 'react-router';

import { Footer } from './Footer';
import { Header } from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
