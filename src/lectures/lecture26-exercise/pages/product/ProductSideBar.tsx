import Button from '@/lectures/lecture26-exercise/components/common/Button';
import RadioItem from '@/lectures/lecture26-exercise/components/common/RadioItem';
import Slider from '@/lectures/lecture26-exercise/components/common/Slider';
import { categories } from '@/lectures/lecture26-exercise/data/products';
import type { Category } from '@/lectures/lecture26-exercise/types/category';
import type { Filter } from '@/lectures/lecture26-exercise/types/filter';
import {
  SORT_OPTION_LABELS,
  type SortOption,
} from '@/lectures/lecture26-exercise/types/sortOption';

type ProductSideBarProps = {
  filter: Filter;
  setCategory: (category: Category | null) => void;
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void;
  resetFilter: () => void;
  setSortOption: (sortOption: SortOption) => void;
};

export default function ProductSideBar(productSideBarProps: ProductSideBarProps) {
  const { filter, setCategory, setMinPrice, setMaxPrice, resetFilter, setSortOption } =
    productSideBarProps;
  const { min, max } = filter.priceRange;

  const onChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };
  const onChangeMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };
  const onChangeSortOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as SortOption);
  };

  return (
    <div className="flex w-64 shrink-0 flex-col gap-6 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
      <div>
        <h3 className="mb-3 font-bold text-gray-800 dark:text-white">카테고리</h3>
        <div role="radiogroup" className="flex flex-col gap-2">
          <RadioItem category={null} checked={filter.category === null} onSelect={setCategory}>
            📦 전체
          </RadioItem>
          {categories.map((category) => (
            <RadioItem
              key={category.id}
              category={category.id}
              checked={filter.category === category.id}
              onSelect={setCategory}
            >
              {category.icon} {category.name}
            </RadioItem>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-3 font-bold text-gray-800 dark:text-white">가격대</h3>
        <div className="mb-3 flex flex-col gap-2">
          <Slider
            min="0"
            max="300000"
            step="10000"
            value={filter.priceRange.min}
            onChange={onChangeMinPrice}
          >
            최소: {min.toLocaleString()}원
          </Slider>

          <Slider
            min="0"
            max="300000"
            step="10000"
            value={filter.priceRange.max}
            onChange={onChangeMaxPrice}
          >
            최대: {max.toLocaleString()}원
          </Slider>
        </div>
        <Button variant="secondary" size="sm" onClick={resetFilter}>
          초기화
        </Button>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-3 font-bold text-gray-800 dark:text-white">정렬</h3>
        <select
          className="rounded-lg border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          onChange={onChangeSortOption}
        >
          {Object.entries(SORT_OPTION_LABELS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
          {/* <option value="name">이름순</option>
          <option value="price-asc">가격 낮은순</option>
          <option value="price-desc">가격 높은순</option>
          <option value="rating">평점순</option> */}
        </select>
      </div>
    </div>
  );
}
