import useLang from '@/lectures/lecture15-exercise02/hooks/useLang';
import useTheme from '@/lectures/lecture15-exercise02/hooks/useTheme';
import type { Lang } from '@/lectures/lecture15-exercise02/types/lang';
import type { Theme } from '@/lectures/lecture15-exercise02/types/theme';

type LangConfig = Record<
  Lang,
  {
    label: string;
  }
>;
const langConfig: LangConfig = {
  ko: {
    label: '🇰🇷 ➡️ 🇺🇸',
  },
  en: {
    label: '🇺🇸 ➡️ 🇰🇷',
  },
};

type ThemeConfig = Record<
  Theme,
  {
    labels: { ko: string; en: string };
    className: string;
  }
>;
const themeConfig: ThemeConfig = {
  light: {
    labels: { ko: '🌙 다크 모드', en: '🌙 Dark mode' },
    className: 'bg-gray-700 text-white hover:bg-gray-600',
  },
  dark: {
    labels: { ko: '☀️ 라이트 모드', en: '☀️ Light mode' },
    className: 'bg-yellow-400 text-gray-900 hover:bg-yellow-300',
  },
};

export default function PageTitle() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();

  const themeLabel = themeConfig[theme].labels[lang];
  const { className: themeStyle } = themeConfig[theme];
  const btnStyle = `cursor-pointer rounded-lg px-4 py-2 font-semibold transition-all ${themeStyle}`;
  const style = theme === 'light' ? 'border-gray-300' : 'border-gray-500';

  const { label: langLabel } = langConfig[lang];

  const title = lang === 'ko' ? '나의 앱' : 'My App';

  return (
    <div className={`${style} flex flex-row justify-between border-b p-4 transition-all`}>
      <h1 className="flex flex-row items-center text-2xl font-bold">📝 {title}</h1>
      <div className="flex flex-row items-center gap-4">
        <button type="button" className={btnStyle} onClick={toggleTheme}>
          {themeLabel}
        </button>
        <button type="button" className={btnStyle} onClick={toggleLang}>
          {langLabel}
        </button>
      </div>
    </div>
  );
}
