import useTheme from '@/lectures/lecture15-exercise/hooks/useTheme';

export default function Sidebar() {
  const { theme } = useTheme();

  const navItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '📊', label: 'Dashboard' },
    { icon: '👥', label: 'Users' },
    { icon: '⚙️', label: 'Settings' },
    { icon: '📧', label: 'Messages' },
  ];

  return (
    <aside
      className={`w-64 border-r p-4 transition-colors ${
        theme === 'dark'
          ? 'border-gray-700 bg-gray-800 text-white'
          : 'border-gray-200 bg-gray-50 text-gray-900'
      }`}
    >
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`w-full rounded-lg p-3 text-left transition-colors ${
              theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
