import RadioItem from '@/lectures/lecture26-exercise/components/common/RadioItem';
import { categories } from '@/lectures/lecture26-exercise/data/products';
import type { Category } from '@/lectures/lecture26-exercise/types/category';
import type { Filter } from '@/lectures/lecture26-exercise/types/filter';
import type { PriceRange } from '@/lectures/lecture26-exercise/types/priceRange';

type SideMenuProps = {
  filter: Filter;
  setCategory: (category: Category | null) => void;
  setPriceRange: (priceRange: PriceRange) => void;
};

export default function SideMenu(sideMenuProps: SideMenuProps) {
  const { filter, setCategory, setPriceRange } = sideMenuProps;

  return (
    <aside className="w-64 space-y-6 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
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
      <div>
        <h3 className="mb-3 font-bold text-gray-800 dark:text-white">가격대</h3>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">최소: 0원</label>
            <input min="0" max="300000" step="10000" className="w-full" type="range" value="0" />
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">최대: 300,000원</label>
            <input
              min="0"
              max="300000"
              step="10000"
              className="w-full"
              type="range"
              value="300000"
            />
          </div>
          <button className="w-full rounded-lg bg-gray-200 p-2 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
            초기화
          </button>
        </div>
      </div>
      <div>
        <h3 className="mb-3 font-bold text-gray-800 dark:text-white">정렬</h3>
        <select className="w-full rounded-lg border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          <option value="name">이름순</option>
          <option value="price-asc">가격 낮은순</option>
          <option value="price-desc">가격 높은순</option>
          <option value="rating">평점순</option>
        </select>
      </div>
    </aside>
  );
}
