import type { ProductType } from '@/lectures/lecture26-exercise/data/products';

export default function Product({ products }: { products: ProductType[] }) {
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
    </div>
  ));
}
