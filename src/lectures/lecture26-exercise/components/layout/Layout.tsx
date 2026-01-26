import { Outlet } from 'react-router';

import Footer from '@/lectures/lecture26-exercise/components/layout/Footer';
import Header from '@/lectures/lecture26-exercise/components/layout/Header';
import CartProvider from '@/lectures/lecture26-exercise/features/cart/CartProvider';
import SearchProvider from '@/lectures/lecture26-exercise/features/search/SearchProvider';
import ThemeProvider from '@/lectures/lecture26-exercise/features/theme/ThemeProvider';

export default function Layout() {
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <SearchProvider>
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </SearchProvider>
        </CartProvider>
      </ThemeProvider>
    </>
  );
}
