import { Outlet } from 'react-router';

import Header from '@/lectures/lecture26-exercise/components/header/Header';
import CartProvider from '@/lectures/lecture26-exercise/features/cart/CartProvider';
import ThemeProvider from '@/lectures/lecture26-exercise/features/theme/ThemeProvider';

export default function Layout() {
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <Header />
          <main>
            <Outlet />
          </main>
          {/* <Footer /> */}
        </CartProvider>
      </ThemeProvider>
    </>
  );
}
