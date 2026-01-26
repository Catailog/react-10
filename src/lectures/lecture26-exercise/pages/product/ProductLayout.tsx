import React from 'react';

import EmptyState from '@/lectures/lecture26-exercise/components/common/EmptyState';
import ErrorState from '@/lectures/lecture26-exercise/components/common/ErrorState';
import LoadingState from '@/lectures/lecture26-exercise/components/common/LoadingState';
import type { ProductType } from '@/lectures/lecture26-exercise/data/products';
import useSearch from '@/lectures/lecture26-exercise/features/search/useSearch';
import { useFetch } from '@/lectures/lecture26-exercise/hooks/useFetch';
import ProductGrid from '@/lectures/lecture26-exercise/pages/product/ProductGrid';
import ProductSideBar from '@/lectures/lecture26-exercise/pages/product/ProductSideBar';
import type { Category } from '@/lectures/lecture26-exercise/types/category';
import type { Filter } from '@/lectures/lecture26-exercise/types/filter';
import type { SortOption } from '@/lectures/lecture26-exercise/types/sortOption';

export default function ProductLayout() {
  interface FetchResponse {
    products: ProductType[];
  }

  const BASE_URL = '/products.json';
  const initFilter = (): Filter => {
    return {
      category: null,
      priceRange: { min: 0, max: 300000 },
      sortOption: 'name',
      searchTerm: '',
    };
  };

  const [filter, setFilter] = React.useState<Filter>(initFilter);
  const { data, error, isLoading } = useFetch<FetchResponse>(BASE_URL);
  const { debouncedTerm } = useSearch();

  const filteredProducts = React.useMemo(() => {
    if (!data) return [];
    const products = data.products;
    const filteredProducts = products.filter((product) => {
      if (filter.category && product.category !== filter.category) {
        return false;
      }

      if (
        filter.priceRange &&
        (product.price < filter.priceRange.min || product.price > filter.priceRange.max)
      ) {
        return false;
      }

      if (!product.name.includes(debouncedTerm)) {
        return false;
      }

      return true;
    });

    const comparator = (a: ProductType, b: ProductType) => {
      switch (filter.sortOption) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'priceAsc':
          return a.price - b.price;
        case 'priceDesc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    };

    return filteredProducts.sort(comparator);
  }, [data, filter, debouncedTerm]);

  const setCategory = (category: Category | null) => {
    setFilter((prev) => ({ ...prev, category }));
  };
  const setMinPrice = (price: number) => {
    setFilter((prev) => ({ ...prev, priceRange: { ...prev.priceRange, min: price } }));
  };
  const setMaxPrice = (price: number) => {
    setFilter((prev) => ({ ...prev, priceRange: { ...prev.priceRange, max: price } }));
  };
  const resetFilter = () => {
    setFilter(initFilter());
  };
  const setSortOption = (sortOption: SortOption) => {
    setFilter((prev) => ({ ...prev, sortOption }));
  };

  return (
    <div className="flex flex-row gap-6 px-4 py-8">
      <aside>
        <ProductSideBar
          filter={filter}
          setCategory={setCategory}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          resetFilter={resetFilter}
          setSortOption={setSortOption}
        />
      </aside>
      <section className="flex flex-1 flex-row gap-6">
        <div className="flex flex-1 flex-col rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
          {isLoading && <LoadingState />}
          {error && <ErrorState />}
          {!isLoading && !error && !filteredProducts.length && <EmptyState />}
          {!!filteredProducts.length && <ProductGrid products={filteredProducts} />}
        </div>
      </section>
    </div>
  );
}
