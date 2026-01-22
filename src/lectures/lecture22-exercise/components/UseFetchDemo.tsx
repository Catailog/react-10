import type { User } from '@/lectures/lecture22-exercise/Lecture22Ex';

export interface UseFetchDemoProps {
  loading: boolean;
  error: string | null;
  refetch: () => void;
  debouncedSearchTerm: string;
  filteredUsers: User[];
}

export default function UseFetchDemo(useFetchDemoProps: UseFetchDemoProps) {
  const { loading, error, refetch, debouncedSearchTerm, filteredUsers } = useFetchDemoProps;

  return (
    <section className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">4️⃣ useFetch</h2>
        <button
          onClick={refetch}
          className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          <span>🔄</span>
          <span>새로고침</span>
        </button>
      </div>
      <p className="mb-4 text-gray-600">
        API 호출을 쉽게 만들고 로딩, 에러, 데이터 상태를 자동으로 관리합니다.
        {debouncedSearchTerm && ' 위에서 입력한 검색어로 필터링됩니다.'}
      </p>

      {loading && (
        <div className="py-8 text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">데이터를 불러오는 중...</p>
        </div>
      )}

      {error && <div className="rounded-lg bg-red-50 p-4 text-center text-red-600">❌ {error}</div>}

      {!loading && !error && filteredUsers && (
        <>
          <p className="mb-4 text-sm text-gray-600">
            총 {filteredUsers.length}명의 사용자 {debouncedSearchTerm && '(필터링됨)'}
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 font-bold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
