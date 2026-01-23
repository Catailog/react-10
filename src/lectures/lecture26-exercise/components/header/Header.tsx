import MenuBtn from '@/lectures/lecture26-exercise/components/common/MenuBtn';
import SearchBar from '@/lectures/lecture26-exercise/components/header/SearchBar';
import useTheme from '@/lectures/lecture26-exercise/features/theme/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  // TODO: 헤더 버튼 기능
  const onClick = () => {};

  return (
    <div className="sticky top-0 z-40 flex flex-row items-center gap-4 border-b bg-white p-4 shadow-sm">
      <MenuBtn onClick={onClick}>
        <span className="cursor-pointer text-2xl font-bold text-blue-600">🛍️ Mini Shop</span>
      </MenuBtn>
      <SearchBar />
      <div className="flex flex-row gap-3 text-2xl">
        <MenuBtn onClick={toggleTheme}>{theme === 'light' ? '☀️' : '🌙'}</MenuBtn>
        <MenuBtn onClick={onClick}>🛒</MenuBtn>
      </div>
    </div>
  );
}
