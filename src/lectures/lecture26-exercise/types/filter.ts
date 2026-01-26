import type { Category } from '@/lectures/lecture26-exercise/types/category';
import type { PriceRange } from '@/lectures/lecture26-exercise/types/priceRange';
import type { SortOption } from '@/lectures/lecture26-exercise/types/sortOption';

export type Filter = {
  category: Category | null;
  priceRange: PriceRange;
  sortOption: SortOption;
  searchTerm: string;
};
