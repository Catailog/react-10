import type { ProductType } from '@/lectures/lecture26-exercise/data/products';
import Product from '@/lectures/lecture26-exercise/pages/product/Product';

export default function ProductGrid({ products }: { products: ProductType[] }) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">전체 상품 ({products.length})</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Product products={products} />
      </div>
    </div>
  );
}
