import useCart from '@/lectures/lecture26-exercise/features/cart/useCart';
import OrderInfo from '@/lectures/lecture26-exercise/pages/cart/OrderInfo';
import ProductEmpty from '@/lectures/lecture26-exercise/pages/cart/ProductEmpty';
import ProductList from '@/lectures/lecture26-exercise/pages/cart/ProductList';

export default function CartLayout() {
  const { cartProducts } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        {cartProducts.length > 0 ? (
          <>
            <ProductList />
            <OrderInfo />
          </>
        ) : (
          <ProductEmpty />
        )}
      </div>
    </div>
  );
}
