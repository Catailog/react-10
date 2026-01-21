import Box from '@/components/Box';
import { Button } from '@/components/Button';
import useCount from '@/lectures/lecture22/hooks/useCount';

export default function Counter({ initVal }: { initVal: number }) {
  const { count, increaseCount, decreaseCount, resetCount } = useCount(initVal);

  return (
    <Box>
      <p>이 카운터는 {initVal}부터 시작하고, Custom Hook을 사용했습니다.</p>
      <p>count: {count}</p>
      <div className="flex flex-row gap-4">
        <Button onClick={increaseCount}>⬆️</Button>
        <Button onClick={decreaseCount}>⬇️</Button>
        <Button onClick={resetCount}>🔄</Button>
      </div>
    </Box>
  );
}
