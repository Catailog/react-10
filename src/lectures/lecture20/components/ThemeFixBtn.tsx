import FixBtn from '@/lectures/lecture20/components/FixBtn';
import useTheme from '@/lectures/lecture20/hooks/useTheme';

export default function ThemeFixBtn() {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === 'light' ? '☀️' : '🌙';
  return <FixBtn onClick={toggleTheme}>{icon}</FixBtn>;
}
