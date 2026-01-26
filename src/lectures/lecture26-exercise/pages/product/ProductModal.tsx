import Button from '@/lectures/lecture26-exercise/components/common/Button';
import Modal from '@/lectures/lecture26-exercise/components/common/Modal';
import { type ProductType, categories } from '@/lectures/lecture26-exercise/data/products';
import useCart from '@/lectures/lecture26-exercise/features/cart/useCart';

export default function ProductModal({
  product,
  toggleModal,
}: {
  product: ProductType;
  toggleModal: () => void;
}) {
  const { increaseQuantity } = useCart();
  const category = categories.find((p) => p.id === product.category);

  return (
    <Modal toggleModal={toggleModal}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-lg bg-gray-100 p-8 dark:bg-gray-700">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="space-y-4">
          <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm dark:bg-blue-900">
            {category?.icon} {category?.name}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{product.name}</h2>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">⭐</span>
            <span className="font-semibold">{product.rating}</span>
            <span className="text-sm text-gray-500">({product.reviews}개 리뷰)</span>
          </div>
          <div className="border-y py-4 dark:border-gray-700">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {product.price.toLocaleString()}원
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-gray-800 dark:text-white">제품 설명</h3>
            <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-gray-800 dark:text-white">재고</h3>
            <p className="text-green-600 dark:text-green-400">✓ {product.stock}개 남음</p>
          </div>
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={() => increaseQuantity(product)}
          >
            🛒 장바구니에 담기
          </Button>
        </div>
      </div>
    </Modal>
  );
}
