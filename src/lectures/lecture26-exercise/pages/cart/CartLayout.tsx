import React from 'react';

import { Link } from 'react-router';

import Button from '@/lectures/lecture26-exercise/components/common/Button';
import useCart from '@/lectures/lecture26-exercise/features/cart/useCart';
import ProductFlex from '@/lectures/lecture26-exercise/pages/cart/ProductFlex';

export default function CartLayout() {
  const { cartProducts, resetCart } = useCart();

  const totalPrice = React.useMemo(
    () => cartProducts.reduce((sum, product) => sum + product.price * product.quantity, 0),
    [cartProducts],
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            장바구니 ({cartProducts.length}개 상품)
          </h2>
          <button
            onClick={resetCart}
            className="rounded-lg border-2 border-blue-500 px-3 py-1 text-sm font-semibold text-blue-500 transition-all hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-blue-900"
          >
            전체 삭제
          </button>
        </div>
        <ProductFlex />
        <div className="rounded-lg border bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white">결제 정보</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>상품 금액</span>
              <span>{`${totalPrice.toLocaleString()}원`}</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>배송비</span>
              <span>
                <span className="text-green-600 dark:text-green-400">무료</span>
              </span>
            </div>
            <div className="border-t pt-2 dark:border-gray-700">
              <div className="flex justify-between text-xl font-bold text-gray-800 dark:text-white">
                <span>총 결제금액</span>
                <span className="text-blue-600 dark:text-blue-400">{`${totalPrice.toLocaleString()}원`}</span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <Link to="/lecture26-ex/product" className="flex-1">
              <Button variant="outline" size="lg" className="w-full">
                계속 쇼핑하기
              </Button>
            </Link>
            <Link to="/lecture26-ex/order" className="flex-1">
              <Button variant="primary" size="lg" className="w-full">
                주문하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
