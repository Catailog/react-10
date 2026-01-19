import Main from '@/lectures/lecture15-exercise02/components/Main';
import PageTitle from '@/lectures/lecture15-exercise02/components/PageTitle';
import SideBar from '@/lectures/lecture15-exercise02/components/SideBar';
import useTheme from '@/lectures/lecture15-exercise02/hooks/useTheme';

export default function Layout() {
  const { theme } = useTheme();

  const style =
    theme === 'light'
      ? 'border-gray-300 bg-gray-50 text-gray-900'
      : 'border-gray-500 bg-gray-800 text-white';

  return (
    <div className={`${style} min-h-screen bg-gray-100 transition-colors`}>
      <PageTitle />
      <div className="flex flex-row">
        <div className={`${style} flex w-64 flex-col border-r p-4 transition-colors`}>
          <SideBar />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <Main />
        </div>
      </div>
    </div>
  );
}
