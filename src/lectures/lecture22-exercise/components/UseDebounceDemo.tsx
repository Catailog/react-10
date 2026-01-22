export interface UseDebounceDemoProps {
  searchTerm: string;
  setSearchTerm: (value: string | ((prevState: string) => string)) => void;
  debouncedSearchTerm: string;
}

export default function UseDebounceDemo(useDebounceDemoProps: UseDebounceDemoProps) {
  const { searchTerm, setSearchTerm, debouncedSearchTerm } = useDebounceDemoProps;

  return (
    <section className="mb-8 rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">3️⃣ useDebounce</h2>
      <p className="mb-4 text-gray-600">
        입력값을 지연시켜 불필요한 API 호출이나 무거운 계산을 줄입니다.
      </p>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="검색어를 입력하세요..."
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-red-50 p-4">
          <p className="mb-2 font-semibold text-red-700">즉시 업데이트:</p>
          <p className="text-lg">{searchTerm || '(입력 없음)'}</p>
        </div>
        <div className="rounded-lg bg-green-50 p-4">
          <p className="mb-2 font-semibold text-green-700">지연 업데이트 (500ms):</p>
          <p className="text-lg">{debouncedSearchTerm || '(입력 없음)'}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        💡 빠르게 타이핑해보세요. 오른쪽 값은 500ms 후에 업데이트됩니다.
      </p>
    </section>
  );
}
