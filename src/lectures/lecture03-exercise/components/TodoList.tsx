import type { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';

// TodoList 컴포넌트 - 할 일 목록을 표시하는 컴포넌트
export function TodoList({
  todos,
  onToggle,
  onDelete,
}: {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete}></TodoItem>
      ))}
    </ul>
  );
}
