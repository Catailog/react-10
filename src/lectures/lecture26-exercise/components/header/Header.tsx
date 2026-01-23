import MenuButton from '@/lectures/lecture26-exercise/components/common/MenuButton';
import SearchBar from '@/lectures/lecture26-exercise/components/header/SearchBar';
import useTheme from '@/lectures/lecture26-exercise/features/theme/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  // TODO: 헤더 버튼 기능
  const onClick = () => {};

  return (
    <div className="sticky top-0 z-40 flex flex-row items-center gap-4 border-b bg-white p-4 shadow-sm">
      <MenuButton onClick={onClick}>
        <span className="cursor-pointer text-2xl font-bold text-blue-600">🛍️ Mini Shop</span>
      </MenuButton>
      <SearchBar />
      <div className="flex flex-row gap-3 text-2xl">
        <MenuButton onClick={toggleTheme}>{theme === 'light' ? '☀️' : '🌙'}</MenuButton>
        <MenuButton onClick={onClick}>🛒</MenuButton>
      </div>
    </div>
  );
}
