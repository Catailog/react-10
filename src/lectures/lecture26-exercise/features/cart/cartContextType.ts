import type { ProductType } from '@/lectures/lecture26-exercise/data/products';
import type { CartProduct } from '@/lectures/lecture26-exercise/features/cart/cart';

export type CartContextType = {
  cartProducts: CartProduct[];
  increaseQuantity: (product: ProductType) => void;
  decreaseQuantity: (product: ProductType) => void;
  removeProduct: (product: ProductType) => void;
  resetCart: () => void;
};
