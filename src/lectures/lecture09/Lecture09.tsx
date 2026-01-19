import { useEffect, useState } from 'react';

import { Button } from '@/components/Button';

export default function Lecture09() {
  const [count, setCount] = useState<number>(0);

  // deps가 없으면 마운트/언마운트 시에만 실행
  useEffect(() => {
    console.log('useEffect(deps: []) 마운트 시 실행');

    return () => {
      console.log('useEffect cleanup(deps: []) 언마운트 시 실행');
    };
  }, []);
  // deps가 있으면 deps가 변할 시 실행
  useEffect(() => {
    console.log('useEffect(deps: [count]) count가 변하면 실행');

    return () => {
      console.log('useEffect cleanup(deps: [count]) count가 변하면 실행');
    };
  }, [count]);

  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  return <Button onClick={onClick}>count: {count}</Button>;
}
