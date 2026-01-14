import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container py-8 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
