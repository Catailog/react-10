import React from 'react';

// Generic 타입 T를 사용하여 타입 안전성을 보장하세요
function useLocalStorage<T>(key: string, initialValue: T) {
  // useState의 lazy initialization을 사용하세요
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      // 여기에 코드를 작성하세요
      // 1. localStorage에서 key로 아이템 가져오기
      const nameJson = localStorage.getItem('demo-name') || '';
      // 2. 아이템이 있으면 JSON.parse 후 반환
      const name = nameJson ? JSON.parse(nameJson) : '';
      // 3. 아이템이 없으면 initialValue 반환
      return name || initialValue;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // 여기에 코드를 작성하세요
      // 1. value가 함수인지 확인 (함수형 업데이트 지원)
      const newValue = typeof value === 'function' ? (value as (val: T) => T)(storedValue) : value;
      // 2. storedValue 상태 업데이트
      setStoredValue(newValue);
      // 3. localStorage에 JSON.stringify 후 저장
      const valueJson = JSON.stringify(newValue);
      localStorage.setItem('demo-name', valueJson);
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
