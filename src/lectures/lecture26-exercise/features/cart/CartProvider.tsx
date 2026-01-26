import React from 'react';

import type { ProductType } from '@/lectures/lecture26-exercise/data/products';
import type { CartProduct } from '@/lectures/lecture26-exercise/features/cart/cart';
import { CartContext } from '@/lectures/lecture26-exercise/features/cart/cartContext';

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartProducts, setCartProducts] = React.useState<CartProduct[]>(getCurCart);

  React.useEffect(() => {
    const cartJson = JSON.stringify(cartProducts);
    localStorage.setItem('shopping-cart', cartJson);
  }, [cartProducts]);

  const increaseQuantity = (newProduct: ProductType) => {
    setCartProducts((prev) => {
      const productInCart = cartProducts.find((product) => product.id === newProduct.id);
      if (productInCart) {
        return prev.map((p) =>
          p.id === newProduct.id ? { ...p, quantity: Math.min(p.quantity + 1, p.stock) } : p,
        );
      } else {
        return [...prev, { ...newProduct, quantity: 1 }];
      }
    });
  };
  // TODO: 장바구니 제거 기능들
  const decreaseQuantity = (product: ProductType) => {};
  const resetQuantity = (product: ProductType) => {};
  const resetCart = () => {};

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        increaseQuantity,
        decreaseQuantity,
        resetQuantity,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function getCurCart(): CartProduct[] {
  const curCart = localStorage.getItem('shopping-cart') || '[]';
  return JSON.parse(curCart);
}
