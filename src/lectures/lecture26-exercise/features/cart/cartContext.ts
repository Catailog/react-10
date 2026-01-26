import React from 'react';

import type { CartContextType } from '@/lectures/lecture26-exercise/features/cart/cartContextType';

export const CartContext = React.createContext<CartContextType>({
  cartProducts: [],
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeProduct: () => {},
  resetCart: () => {},
});
