import type { Category } from '@/lectures/lecture26-exercise/types/category';
import type { PriceRange } from '@/lectures/lecture26-exercise/types/priceRange';

export type Filter = {
  category: Category | null;
  priceRange: PriceRange | null;
};
