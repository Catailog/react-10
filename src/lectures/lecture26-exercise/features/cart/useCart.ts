import React from 'react';

import { CartContext } from '@/lectures/lecture26-exercise/features/cart/cartContext';
import type { CartContextType } from '@/lectures/lecture26-exercise/features/cart/cartContextType';

export default function useCart() {
  const cartProvider = React.useContext<CartContextType>(CartContext);

  return cartProvider;
}
