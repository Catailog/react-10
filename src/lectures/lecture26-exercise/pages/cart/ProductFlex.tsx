import useCart from '@/lectures/lecture26-exercise/features/cart/useCart';
import Product from '@/lectures/lecture26-exercise/pages/cart/Product';

export default function ProductFlex() {
  const { cartProducts, increaseQuantity, decreaseQuantity, removeProduct } = useCart();

  return (
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
  );
}
