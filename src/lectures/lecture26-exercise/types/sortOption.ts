export type SortOption = 'name' | 'priceAsc' | 'priceDesc' | 'rating';

export const SORT_OPTION_LABELS: Record<SortOption, string> = {
  name: '이름순',
  priceAsc: '가격 낮은순',
  priceDesc: '가격 높은순',
  rating: '평점순',
};
