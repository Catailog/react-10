import React from 'react';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

// API 호출을 쉽게 만드는 Hook
function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = async () => {
    try {
      // 1. loading을 true로 설정
      setLoading(true);
      // 2. error를 null로 초기화
      setError(null);
      // 3. fetch로 API 호출
      const response = await fetch(url);
      // 4. response.ok 체크
      if (!response.ok) {
        throw new Error('response.ok === false');
      }
      // 5. JSON 파싱
      const result = await response.json();
      // 6. data 상태 업데이트
      setData(result);
    } catch (err) {
      // 에러 처리
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      // loading을 false로 설정
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]); // url이 변경될 때마다 실행

  return { data, loading, error, refetch: fetchData };
}

export default useFetch;
