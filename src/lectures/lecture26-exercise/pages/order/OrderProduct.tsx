import type { CartProduct } from '@/lectures/lecture26-exercise/features/cart/cart';

export default function OrderProduct({ product }: { product: CartProduct }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600 dark:text-gray-400">
        {product.name} x {product.quantity}
      </span>
      <span className="font-semibold">{(product.price * product.quantity).toLocaleString()}원</span>
    </div>
  );
}
