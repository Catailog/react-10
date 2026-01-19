import clsx from 'clsx';

import useTheme from '@/lectures/lecture15-exercise02/hooks/useTheme';

export default function SideBarItem({ txt }: { txt: string }) {
  const { theme } = useTheme();

  const style = clsx('w-full cursor-pointer rounded-lg p-3 text-left transition-colors', {
    'hover:bg-gray-200': theme === 'light',
    'hover:bg-gray-600': theme === 'dark',
  });

  return (
    <button type="button" className={style}>
      {txt}
    </button>
  );
}
