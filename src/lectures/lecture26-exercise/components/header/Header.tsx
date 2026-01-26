import clsx from 'clsx';
import { Link } from 'react-router';

import MenuButton from '@/lectures/lecture26-exercise/components/common/MenuButton';
import SearchBar from '@/lectures/lecture26-exercise/components/header/SearchBar';
import useCart from '@/lectures/lecture26-exercise/features/cart/useCart';
import useTheme from '@/lectures/lecture26-exercise/features/theme/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { cartProducts } = useCart();

  const getCartTotalQuantity = () => {
    const totalQuantity = cartProducts.reduce((sum, product) => sum + product.quantity, 0);
    return totalQuantity < 10 ? totalQuantity : '9+';
  };

  return (
    <div className="sticky top-0 z-40 flex flex-row items-center gap-4 border-b bg-white p-4 shadow-sm">
      <Link to="/lecture26-ex">
        <MenuButton>
          <span className="cursor-pointer text-2xl font-bold text-blue-600">🛍️ Mini Shop</span>
        </MenuButton>
      </Link>
      <SearchBar />
      <div className="flex flex-row gap-3 text-2xl">
        <MenuButton onClick={toggleTheme}>{theme === 'light' ? '☀️' : '🌙'}</MenuButton>
        <Link to="/lecture26-ex/cart" className="relative">
          <MenuButton>
            <span>🛒</span>
          </MenuButton>
          {cartProducts.length > 0 && (
            <span
              className={clsx(
                'absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center',
                'rounded-full bg-red-500 text-xs font-bold text-white',
              )}
            >
              {getCartTotalQuantity()}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
