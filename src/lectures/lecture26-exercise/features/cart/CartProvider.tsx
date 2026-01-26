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
      const productInCart = prev.find((product) => product.id === newProduct.id);
      if (productInCart) {
        return prev.map((p) =>
          p.id === newProduct.id ? { ...p, quantity: Math.min(p.quantity + 1, p.stock) } : p,
        );
      } else {
        return [...prev, { ...newProduct, quantity: 1 }];
      }
    });
  };
  const decreaseQuantity = (productToDecrease: ProductType) => {
    setCartProducts((prev) => {
      const productInCart = prev.find((product) => product.id === productToDecrease.id);

      if (!productInCart) return prev;

      if (productInCart.quantity === 1) {
        return prev.filter((p) => p.id !== productToDecrease.id);
      } else {
        return prev.map((p) =>
          p.id === productToDecrease.id ? { ...p, quantity: Math.max(p.quantity - 1, 0) } : p,
        );
      }
    });
  };
  const removeProduct = (productToReset: ProductType) => {
    setCartProducts((prev) => {
      const productInCart = prev.find((product) => product.id === productToReset.id);
      if (productInCart) {
        return prev.filter((p) => p.id !== productToReset.id);
      } else {
        return [...prev];
      }
    });
  };
  const resetCart = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        increaseQuantity,
        decreaseQuantity,
        removeProduct: removeProduct,
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
