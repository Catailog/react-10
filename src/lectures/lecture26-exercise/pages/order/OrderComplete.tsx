import React from 'react';

import { Link } from 'react-router';

import Button from '@/lectures/lecture26-exercise/components/common/Button';
import type { CartProduct } from '@/lectures/lecture26-exercise/features/cart/cart';
import type { ShippingInfo } from '@/lectures/lecture26-exercise/types/shippingInfo';

interface OrderCompleteProps {
  shippingInfo: ShippingInfo;
  orderProducts: CartProduct[];
}

export default function OrderComplete(orderCompleteProps: OrderCompleteProps) {
  const { shippingInfo, orderProducts } = orderCompleteProps;
  const [orderId] = React.useState(
    () => `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
  );
  const [orderTime] = React.useState(() => {
    const date = new Date();

    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const formattedDay = `${y}년 ${m}월 ${d}일`;

    const h = date.getHours();
    const min = date.getMinutes();
    const period = h < 12 ? '오전' : '오후';
    const formattedH = h % 12 === 0 ? '12' : (h % 12).toString().padStart(2, '0');
    const formattedMin = min.toString().padStart(2, '0');
    const formattedTime = `${period} ${formattedH}:${formattedMin}`;

    const formattedDate = `${formattedDay} ${formattedTime}`;
    return formattedDate;
  });

  const totalPrice = React.useMemo(
    () => orderProducts.reduce((sum, product) => sum + product.price * product.quantity, 0),
    [orderProducts],
  );

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="text-center">
        <p className="text-6xl">✅</p>
        <h2 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">
          주문이 완료되었습니다!
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">주문해주셔서 감사합니다.</p>
      </div>
      <div className="rounded-lg border bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white">주문 정보</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">주문번호</span>
            <span className="font-mono font-semibold">{orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">주문일시</span>
            <span className="font-semibold">{orderTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">받는 분</span>
            <span className="font-semibold">{shippingInfo.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">전화번호</span>
            <span className="font-semibold">{shippingInfo.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">배송주소</span>
            <span className="text-right font-semibold">{shippingInfo.address}</span>
          </div>
          {shippingInfo.message && (
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">배송메시지</span>
              <span className="text-right font-semibold">{shippingInfo.message}</span>
            </div>
          )}
        </div>
      </div>
      <div className="rounded-lg border bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white">
          주문 상품 ({orderProducts.length}개)
        </h3>
        <div className="space-y-3">
          {orderProducts.map((product) => (
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                {product.name} x {product.quantity}
              </span>
              <span className="font-semibold">
                {(product.price * product.quantity).toLocaleString()}원
              </span>
            </div>
          ))}

          <div className="border-t pt-3 dark:border-gray-700">
            <div className="flex justify-between text-xl font-bold">
              <span>총 결제금액</span>
              <span className="text-blue-600 dark:text-blue-400">
                {totalPrice.toLocaleString()}원
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link to="/lecture26-ex">
        <Button variant="primary" size="lg" className="w-full">
          쇼핑 계속하기
        </Button>
      </Link>
    </div>
  );
}
