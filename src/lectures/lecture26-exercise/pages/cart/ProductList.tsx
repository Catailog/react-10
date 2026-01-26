import Button from '@/lectures/lecture26-exercise/components/common/Button';
import useCart from '@/lectures/lecture26-exercise/features/cart/useCart';
import Product from '@/lectures/lecture26-exercise/pages/cart/Product';

export default function ProductList() {
  const { cartProducts, increaseQuantity, decreaseQuantity, removeProduct, resetCart } = useCart();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          장바구니 ({cartProducts.length}개 상품)
        </h2>
        <Button onClick={resetCart} variant="outline" size="xs">
          전체 삭제
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {cartProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeProduct={removeProduct}
          />
        ))}
      </div>
    </div>
  );
}
