import type { Todo } from '../types/todo';

// TodoItem 컴포넌트 - 개별 할 일 항목을 표시하는 컴포넌트
export function TodoItem({
  todo,
  onToggle,
  onDelete,
}: {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const { id, text, completed } = todo;

  const onChange = () => {
    onToggle(id);
  };

  const onClick = () => {
    onDelete(id);
  };

  return (
    <li className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <input
        type="checkbox"
        className={'h-5 w-5 cursor-pointer'}
        checked={completed}
        onChange={onChange}
      />
      <span className={`flex-1 ${completed ? 'text-gray-400 line-through' : ''}`}>{text}</span>
      <button
        className="rounded bg-red-500 px-3 py-1 text-sm font-semibold text-white hover:bg-red-600"
        onClick={onClick}
      >
        삭제
      </button>
    </li>
  );
}
