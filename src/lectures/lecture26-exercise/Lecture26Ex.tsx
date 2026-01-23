import { useMemo, useState } from 'react';

import Header from '@/lectures/lecture26-exercise/components/header/Header';
import SideMenu from '@/lectures/lecture26-exercise/components/sideMenu/SideMenu';
import type { Product } from '@/lectures/lecture26-exercise/data/products';
import ThemeProvider from '@/lectures/lecture26-exercise/features/theme/ThemeProvider';
import { useFetch } from '@/lectures/lecture26-exercise/hooks/useFetch';
import type { Category } from '@/lectures/lecture26-exercise/types/category';
import type { Filter } from '@/lectures/lecture26-exercise/types/filter';
import type { PriceRange } from '@/lectures/lecture26-exercise/types/priceRange';

// TODO: 필요한 Context, Hook, Component를 import 하세요
// import { CartProvider } from './contexts/CartContext';
// import { ThemeProvider } from './contexts/ThemeContext';
// import { ProductProvider } from './contexts/ProductContext';
// 등등...

/**
 * ShoppingApp - Mini 쇼핑몰 메인 컴포넌트
 *
 * 이 프로젝트는 지금까지 배운 모든 React 개념을 활용합니다:
 * - State & Props
 * - useEffect
 * - Context API (CartContext, ThemeContext, ProductContext)
 * - Custom Hooks (useLocalStorage, useDebounce, useCart)
 * - 컴포넌트 합성
 * - 성능 최적화 (React.memo, useMemo, useCallback)
 */

function ShoppingApp() {
  // TODO: 상태 관리
  // - 현재 페이지 ('shop' | 'cart' | 'order')
  // - 선택된 제품 (상세 모달용)
  // - 검색어
  // - 필터 옵션

  // TODO: Context 사용
  // - useCart() - 장바구니
  // - useTheme() - 테마
  // - useProducts() - 제품 목록 및 필터

  interface FetchResponse {
    products: Product[];
  }

  const BASE_URL = '/products.json';
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<Filter>({ category: null, priceRange: null });
  const { data, error, isLoading } = useFetch<FetchResponse>(BASE_URL);

  const filteredProducts = useMemo(() => {
    if (!data) return [];
    const products = data.products;

    return products.filter((product) => {
      if (filter.category && product.category !== filter.category) {
        return false;
      }

      if (
        filter.priceRange &&
        (product.price < filter.priceRange.min || product.price > filter.priceRange.max)
      ) {
        return false;
      }

      return true;
    });
  }, [data, filter]);

  const setCategory = (category: Category | null) => {
    setFilter((prev) => ({ ...prev, category }));
  };

  const setPriceRange = (range: PriceRange | null) => {
    setFilter((prev) => ({ ...prev, priceRange: range }));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <Header />
        <div className="flex flex-row gap-6">
          <SideMenu filter={filter} setCategory={setCategory} setPriceRange={setPriceRange} />
          <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-bold">전체 상품 ({filteredProducts.length})</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {isLoading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error</div>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md dark:border-gray-700"
                  >
                    <div className="mb-3 flex h-48 items-center justify-center bg-gray-100 dark:bg-gray-700">
                      <span className="text-4xl">🖼️</span>
                    </div>
                    <h3 className="mb-2 font-bold text-gray-800 dark:text-white">{product.name}</h3>
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        {product.price.toLocaleString()}원
                      </span>
                      <span className="text-sm text-gray-500">⭐ {product.rating}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// TODO: Provider로 감싸기
function App() {
  return (
    <>
      <ThemeProvider>
        <ShoppingApp />
        {/* <CartProvider>
        <ProductProvider>
        </ProductProvider>
      </CartProvider> */}
      </ThemeProvider>
    </>
  );
}

export default App;
