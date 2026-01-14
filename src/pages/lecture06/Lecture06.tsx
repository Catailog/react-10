import { useCallback, useMemo, useState } from 'react';
import { Button } from '../../components/Button';

export default function Lecture06() {
  const [count, setCount] = useState(0);

  const handleClick1 = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleClick2 = useCallback(() => {
    console.log('handleClick2(deps: [])', count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick3 = useCallback(() => {
    console.log('handleClick3(deps: [count])', count);
  }, [count]);
  const handleClick4 = useCallback(() => {
    console.log('handleClick4(deps: [handleClick2])', count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleClick2]);
  const handleClick5 = useCallback(() => {
    console.log('handleClick5(deps: [handleClick3])', count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleClick3]);

  const [operand1, setOperand1] = useState(1);
  const [operand2, setOperand2] = useState(1);
  const increaseOperand1 = () => {
    setOperand1((prev) => prev + 1);
  };
  const increaseOperand2 = () => {
    setOperand2((prev) => prev + 1);
  };
  const result = useMemo(() => {
    return operand1 + operand2;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operand2]);

  return (
    <>
      <div>
        <h1 className="text-5xl">useCallback</h1>
        <p>count: {count}</p>
        <div className="flex gap-2">
          <Button onClick={handleClick1}>handleClick1</Button>
          <Button onClick={handleClick2}>handleClick2</Button>
          <Button onClick={handleClick3}>handleClick3</Button>
          <Button onClick={handleClick4}>handleClick4</Button>
          <Button onClick={handleClick5}>handleClick5</Button>
        </div>
      </div>
      <div>
        <h1 className="text-5xl">useMemo</h1>
        <p>operand1: {operand1}</p>
        <p>operand2: {operand2}</p>
        <p>result: {result}</p>
        <div className="flex gap-2">
          <Button onClick={increaseOperand1}>operand1++</Button>
          <Button onClick={increaseOperand2}>operand2++</Button>
        </div>
      </div>
    </>
  );
}
