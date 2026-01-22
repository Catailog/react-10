import React from 'react';

// 값을 지연시켜 업데이트하는 Hook (검색 최적화 등에 사용)
function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    // 1. delay 시간 후에 debouncedValue를 업데이트하는 타이머 설정
    // 2. cleanup 함수에서 이전 타이머 제거 (중요!)

    const handler = setTimeout(() => {
      // debouncedValue 업데이트
      setDebouncedValue(value);
    }, delay);

    // cleanup 함수 반환
    return () => {
      // 타이머 정리
      clearInterval(handler);
    };
  }, [value, delay]); // value나 delay가 변경될 때마다 실행

  return debouncedValue;
}

export default useDebounce;
