import useLocalStorage from '@/lectures/lecture22-exercise/hooks/useLocalStorage';

export default function UseLocalStorageDemo() {
  const [name, setName] = useLocalStorage<string>('demo-name', '');

  return (
    <section className="mb-8 rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">1️⃣ useLocalStorage</h2>
      <p className="mb-4 text-gray-600">
        localStorage에 데이터를 저장하고 불러옵니다. 페이지를 새로고침해도 데이터가 유지됩니다.
      </p>
      <div className="flex gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요..."
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <button
          onClick={() => setName('')}
          className="rounded-lg bg-red-500 px-6 py-2 font-semibold text-white hover:bg-red-600"
        >
          초기화
        </button>
      </div>
      {name && (
        <p className="mt-4 text-lg">
          안녕하세요, <span className="font-bold text-blue-600">{name}</span>님! 👋
        </p>
      )}
    </section>
  );
}
