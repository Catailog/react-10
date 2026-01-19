import Header from '@/lectures/lecture15-exercise/components/Header';
import MainContent from '@/lectures/lecture15-exercise/components/MainContent';
import Sidebar from '@/lectures/lecture15-exercise/components/SideBar';
import useTheme from '@/lectures/lecture15-exercise/hooks/useTheme';

export default function Layout() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <Header />
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
