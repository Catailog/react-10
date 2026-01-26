import Button from '@/lectures/lecture26-exercise/components/common/Button';
import type { ProductType } from '@/lectures/lecture26-exercise/data/products';
import type { CartProduct } from '@/lectures/lecture26-exercise/features/cart/cart';

interface ProductProps {
  product: CartProduct;
  increaseQuantity: (product: ProductType) => void;
  decreaseQuantity: (product: ProductType) => void;
  removeProduct: (product: ProductType) => void;
}

export default function CartProduct(productProps: ProductProps) {
  const { product, increaseQuantity, decreaseQuantity, removeProduct } = productProps;

  return (
    <div className="flex gap-4 rounded-lg border p-4 dark:border-gray-700">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
        <div className="flex h-full items-center justify-center text-3xl">🖼️</div>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-bold text-gray-800 dark:text-white">{product.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{`${product.price.toLocaleString()}원`}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => decreaseQuantity(product)}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border hover:bg-gray-100"
            >
              -
            </Button>
            <span className="w-8 text-center font-semibold">{product.quantity}</span>
            <Button
              variant="outline"
              onClick={() => increaseQuantity(product)}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border hover:bg-gray-100"
            >
              +
            </Button>
          </div>
          <Button variant="danger" size="xs" onClick={() => removeProduct(product)}>
            삭제
          </Button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-blue-600 dark:text-blue-400">
          {(product.price * product.quantity).toLocaleString()}원
        </p>
      </div>
    </div>
  );
}
