import React from 'react';

import { Link } from 'react-router';

import Button from '@/lectures/lecture26-exercise/components/common/Button';
import type { ShippingInfo } from '@/lectures/lecture26-exercise/types/shippingInfo';

interface OrderFormProps {
  shippingInfo: ShippingInfo;
  setName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setAddress: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setMessage?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleOrder: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function OrderForm(orderFormProps: OrderFormProps) {
  const { shippingInfo, setName, setPhone, setAddress, setMessage, handleOrder } = orderFormProps;

  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">배송 정보 입력</h2>
      <div>
        <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
          이름 <span className="text-red-500">*</span>
        </label>
        <input
          onChange={setName}
          placeholder="홍길동"
          required
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          type="text"
          value={shippingInfo.name}
          name="name"
        />
      </div>
      <div>
        <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
          전화번호 <span className="text-red-500">*</span>
        </label>
        <input
          onChange={setPhone}
          placeholder="010-1234-5678"
          required
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          type="tel"
          value={shippingInfo.phone}
          name="phone"
        />
      </div>
      <div>
        <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
          배송 주소 <span className="text-red-500">*</span>
        </label>
        <input
          onChange={setAddress}
          placeholder="서울시 강남구 테헤란로 123"
          required
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          type="text"
          value={shippingInfo.address}
          name="address"
        />
      </div>
      <div>
        <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
          배송 메시지 (선택)
        </label>
        <textarea
          onChange={setMessage}
          value={shippingInfo.message}
          name="message"
          placeholder="배송 시 요청사항을 입력해주세요"
          rows={3}
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        ></textarea>
      </div>
      <div className="flex gap-3">
        <Link to="/lecture26-ex/cart" className="w-full">
          <Button variant="outline" size="lg" type="button" className="w-full">
            취소
          </Button>
        </Link>
        <Button variant="primary" size="lg" type="submit" onClick={handleOrder} className="w-full">
          주문 완료
        </Button>
      </div>
    </form>
  );
}
