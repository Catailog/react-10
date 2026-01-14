import React from 'react';

// TodoInput 컴포넌트 - 할 일을 입력받는 컴포넌트
export function TodoInput({ addTodo }: { addTodo: (text: string) => void }) {
  // 여기에 코드를 작성하세요
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleInput = (e: React.InputEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleClick = () => {
    addTodo(inputValue);
  };

  return (
    <div className="mb-6 flex gap-2">
      <input
        type="text"
        value={inputValue}
        placeholder="할 일을 입력하세요..."
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        onInput={handleInput}
      />
      <button
        className="rounded-lg bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-600"
        onClick={handleClick}
      >
        추가
      </button>
    </div>
  );
}
