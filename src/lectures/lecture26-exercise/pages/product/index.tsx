import Header from '@/lectures/lecture26-exercise/components/header/Header';
import ThemeProvider from '@/lectures/lecture26-exercise/features/theme/ThemeProvider';
import ProductLayout from '@/lectures/lecture26-exercise/pages/product/ProductLayout';

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

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <main>
          <ProductLayout />
        </main>
      </div>
    </div>
  );
}

// TODO: Provider로 감싸기
export default function App() {
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
