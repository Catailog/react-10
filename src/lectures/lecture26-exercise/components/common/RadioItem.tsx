import clsx from 'clsx';

import type { Category } from '@/lectures/lecture26-exercise/types/category';

type RadioItemProps = {
  category: Category | null;
  checked: boolean;
  onSelect: (category: Category | null) => void;
  children: React.ReactNode;
};

export default function RadioItem(radioItemProps: RadioItemProps) {
  const { category, checked, onSelect, children } = radioItemProps;

  return (
    <button
      role="radio"
      value={category ?? ''}
      aria-checked={checked}
      onClick={() => onSelect(category)}
      className={clsx('cursor-pointer rounded-lg p-2 text-left transition-all', {
        'bg-blue-100 text-blue-700': checked,
        'hover:bg-gray-100': !checked,
      })}
    >
      {children}
    </button>
  );
}
