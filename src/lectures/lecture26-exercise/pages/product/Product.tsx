import clsx from 'clsx';

import type { ProductType } from '@/lectures/lecture26-exercise/data/products';
import useCart from '@/lectures/lecture26-exercise/features/cart/useCart';

export default function Product({ products }: { products: ProductType[] }) {
  const { increaseQuantity } = useCart();

  return products.map((product) => (
    <div
      key={product.id}
      className="rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md dark:border-gray-700"
    >
      <div className="mb-3 flex h-48 items-center justify-center bg-gray-100 dark:bg-gray-700">
        <span className="text-4xl">🖼️</span>
      </div>
      <h3 className="mb-2 font-bold text-gray-800 dark:text-white">{product.name}</h3>
      <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-blue-600">{product.price.toLocaleString()}원</span>
        <span className="text-sm text-gray-500">⭐ {product.rating}</span>
      </div>
      <button
        className={clsx(
          `w-full cursor-pointer rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition-all`,
          `hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50`,
        )}
        onClick={() => {
          increaseQuantity(product);
        }}
      >
        🛒 장바구니 담기
      </button>
    </div>
  ));
}
