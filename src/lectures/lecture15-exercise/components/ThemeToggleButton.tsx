import useTheme from '@/lectures/lecture15-exercise/hooks/useTheme';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`cursor-pointer rounded-lg px-4 py-2 font-semibold transition-all ${
        theme === 'dark'
          ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
          : 'bg-gray-700 text-white hover:bg-gray-600'
      }`}
    >
      {theme === 'dark' ? '☀️ 라이트 모드' : '🌙 다크 모드'}
    </button>
  );
}
