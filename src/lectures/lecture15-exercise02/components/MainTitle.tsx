import useLang from '@/lectures/lecture15-exercise02/hooks/useLang';
import useTheme from '@/lectures/lecture15-exercise02/hooks/useTheme';

const WELCOME_TEXT = {
  ko: '나의 앱에 오신 걸 환영합니다.',
  en: 'Welcome to My App',
} as const;
const THEME_TEXT = {
  light: {
    ko: '라이트 모드 ☀️',
    en: 'Light Mode ☀️',
  },
  dark: {
    ko: '다크 모드 🌙',
    en: 'Dark Mode 🌙',
  },
} as const;
const CURRENT_THEME_TXT = {
  ko: '현재 테마',
  en: 'Current Theme',
} as const;

export default function MainTitle() {
  const { theme } = useTheme();
  const { lang } = useLang();
  const welcomeTxt = WELCOME_TEXT[lang];
  const themeTxt = THEME_TEXT[theme][lang];
  const currentThemeTxt = CURRENT_THEME_TXT[lang];

  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold">{welcomeTxt}</h2>
      <p className="mt-2">
        {currentThemeTxt}: <span className="font-semibold">{themeTxt}</span>
      </p>
    </div>
  );
}
