import Card from '@/lectures/lecture15-exercise/components/Card';
import useTheme from '@/lectures/lecture15-exercise/hooks/useTheme';

export default function MainContent() {
  const { theme } = useTheme();

  const cards = [
    {
      title: '카드 1',
      content: 'Context API를 사용하면 Props Drilling 없이 전역 상태를 관리할 수 있습니다.',
    },
    {
      title: '카드 2',
      content: 'useContext 훅으로 어떤 깊이의 컴포넌트에서도 데이터에 접근할 수 있습니다.',
    },
    {
      title: '카드 3',
      content: '테마가 변경되면 모든 컴포넌트가 자동으로 업데이트됩니다.',
    },
    {
      title: '카드 4',
      content: 'localStorage를 활용하여 사용자의 테마 선택을 저장할 수 있습니다.',
    },
  ];

  return (
    <main className="flex-1 p-6">
      <div className="mb-6">
        <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Welcome to My App
        </h2>
        <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          현재 테마:{' '}
          <span className="font-semibold">
            {theme === 'dark' ? '다크 모드 🌙' : '라이트 모드 ☀️'}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>

      <div className="mt-8">
        <h3
          className={`mb-4 text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
        >
          버튼 예시
        </h3>
        <div className="flex gap-4">
          <button
            className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
              theme === 'dark'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Primary Button
          </button>
          <button
            className={`rounded-lg border-2 px-6 py-3 font-semibold transition-colors ${
              theme === 'dark'
                ? 'border-gray-600 text-white hover:bg-gray-700'
                : 'border-gray-300 text-gray-900 hover:bg-gray-100'
            }`}
          >
            Secondary Button
          </button>
        </div>
      </div>
    </main>
  );
}
