import React from 'react';

import type { CartProduct } from '@/lectures/lecture26-exercise/features/cart/cart';
import useCart from '@/lectures/lecture26-exercise/features/cart/useCart';
import OrderComplete from '@/lectures/lecture26-exercise/pages/order/OrderComplete';
import OrderForm from '@/lectures/lecture26-exercise/pages/order/OrderForm';
import type { ShippingInfo } from '@/lectures/lecture26-exercise/types/shippingInfo';

export default function OrderLayout() {
  const [shippingInfo, setShippingInfo] = React.useState<ShippingInfo>({
    name: '',
    phone: '',
    address: '',
    message: '',
  });
  const { cartProducts, resetCart } = useCart();
  const [orderProducts, setOrderProducts] = React.useState<CartProduct[]>([]);
  const [allFilled, setAllFilled] = React.useState(false);

  const handleOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const requiredFields = ['name', 'phone', 'address'] as const;
    const allFilled = requiredFields.every((field) => shippingInfo[field].trim() !== '');
    setAllFilled(allFilled);

    if (allFilled) {
      setOrderProducts(cartProducts);
      resetCart();
    }
  };

  const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo((prev) => ({ ...prev, name: e.target.value }));
  };
  const setPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo((prev) => ({ ...prev, phone: e.target.value }));
  };
  const setAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo((prev) => ({ ...prev, address: e.target.value }));
  };
  const setMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setShippingInfo((prev) => ({ ...prev, message: e.target.value }));
  };

  return (
    <>
      {!allFilled ? (
        <OrderForm
          shippingInfo={shippingInfo}
          setName={setName}
          setPhone={setPhone}
          setAddress={setAddress}
          setMessage={setMessage}
          handleOrder={handleOrder}
        />
      ) : (
        <OrderComplete shippingInfo={shippingInfo} orderProducts={orderProducts} />
      )}
    </>
  );
}
