import { forwardRef, useEffect, useRef, useState } from 'react';

import { Button } from '@/components/Button';

const UnmountTest = forwardRef(() => {
  useEffect(() => {
    console.log('useEffect(deps: []) UnmountTest 마운트 시 실행');

    return () => {
      console.log('useEffect cleanup(deps: []) UnmountTest 언마운트 시 실행');
    };
  }, []);

  return <div>Unmount Test</div>;
});

export default function Lecture09() {
  const [count, setCount] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);
  // deps가 있으면 deps가 변할 시 실행
  useEffect(() => {
    console.log('useEffect(deps: [count]) count가 변하면 실행');

    return () => {
      console.log('useEffect cleanup(deps: [count]) count가 변하면 실행');
    };
  }, [count]);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const unmountTestRef = useRef<unknown>(null);
  const toggleUnmountTest = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Button onClick={increaseCount}>count: {count}</Button>
      <Button onClick={toggleUnmountTest}>div 토글</Button>
      {show && <UnmountTest ref={unmountTestRef} />}
    </>
  );
}
