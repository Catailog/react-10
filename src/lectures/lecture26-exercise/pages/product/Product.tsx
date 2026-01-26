import React from 'react';

import Button from '@/lectures/lecture26-exercise/components/common/Button';
import type { ProductType } from '@/lectures/lecture26-exercise/data/products';
import useCart from '@/lectures/lecture26-exercise/features/cart/useCart';
import ProductModal from '@/lectures/lecture26-exercise/pages/product/ProductModal';

export default function Product({ products }: { products: ProductType[] }) {
  const { increaseQuantity } = useCart();
  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const [modalProduct, setModalProduct] = React.useState<ProductType>({} as ProductType);

  const toggleModal = (product?: ProductType) => {
    if (product) setModalProduct(product);
    setIsModalOpened((prev) => !prev);
  };

  const handleAddCart = (product: ProductType, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    increaseQuantity(product);
  };

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="flex cursor-pointer flex-col justify-between rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md dark:border-gray-700"
          onClick={() => toggleModal(product)}
        >
          <div>
            <div className="mb-3 flex h-48 items-center justify-center bg-gray-100 dark:bg-gray-700">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="mb-2 font-bold text-gray-800 dark:text-white">{product.name}</h3>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-end justify-between">
              <div className="flex flex-col justify-end">
                <span className="text-lg font-bold text-blue-600">
                  {product.price.toLocaleString()}원
                </span>
                <span className="text-xs text-nowrap text-gray-500">
                  ⭐ {product.rating}({product.reviews})
                </span>
              </div>
              <span className="text-xs text-nowrap text-gray-500">재고: {product.stock}개</span>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={(e) => handleAddCart(product, e)}
              className="w-full"
            >
              🛒 장바구니 담기
            </Button>
          </div>
        </div>
      ))}
      {isModalOpened && <ProductModal product={modalProduct} toggleModal={toggleModal} />}
    </>
  );
}
