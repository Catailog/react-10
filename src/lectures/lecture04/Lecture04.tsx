import { useEffect, useRef } from 'react';

export default function Lecture04() {
  const arr = [1, 2, 3, 4, 5];
  const inputRef = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <p>ref를 사용하여 select에 곧바로 focus를 줬습니다.</p>
      <p>방향키를 위아래로 움직여 확인해보세요.</p>
      <select ref={inputRef}>
        {arr.map((v) => (
          <option value={v}>{v}</option>
        ))}
      </select>
    </>
  );
}
