import useCart from '@/lectures/lecture26-exercise/features/cart/useCart';
import CartOrderInfo from '@/lectures/lecture26-exercise/pages/cart/CartOrderInfo';
import CartProductEmpty from '@/lectures/lecture26-exercise/pages/cart/CartProductEmpty';
import CartProductList from '@/lectures/lecture26-exercise/pages/cart/CartProductList';

export default function CartLayout() {
  const { cartProducts } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        {cartProducts.length > 0 ? (
          <>
            <CartProductList />
            <CartOrderInfo />
          </>
        ) : (
          <CartProductEmpty />
        )}
      </div>
    </div>
  );
}
