import clsx from 'clsx';

import useLang from '@/lectures/lecture15-exercise02/hooks/useLang';
import useTheme from '@/lectures/lecture15-exercise02/hooks/useTheme';

const CARD_TXT = {
  ko: '카드',
  en: 'Card',
} as const;

export default function Card({ idx, txt }: { idx: number; txt: string }) {
  const { theme } = useTheme();
  const { lang } = useLang();

  const cardStyle = clsx('rounded-lg border p-6 shadow-md transition-colors', {
    'bg-white border-gray-200': theme === 'light',
    'bg-black border-gray-800': theme === 'dark',
  });
  const cardTitleStyle = clsx('mb-2 text-xl font-bold', {
    'text-gray-900': theme === 'light',
    'text-gray-100': theme === 'dark',
  });
  const cardContentStyle = clsx('', {
    'text-gray-600': theme === 'light',
    'text-gray-400': theme === 'dark',
  });

  const cardTxt = CARD_TXT[lang];

  return (
    <div className={cardStyle}>
      <h3 className={cardTitleStyle}>
        {cardTxt} {idx}
      </h3>
      <p className={cardContentStyle}>{txt}</p>
    </div>
  );
}
