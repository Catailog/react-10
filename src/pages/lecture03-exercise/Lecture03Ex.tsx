import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { FooterBtn } from './components/FooterBtn';
import { useTodos } from './hooks/useTodos';
import { TodoStats } from './components/TodoStats';

export default function Lecture03Ex() {
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    deleteAll,
    deleteCompleted,
    totalCount,
    completedCount,
  } = useTodos();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">📝 Todo List</h1>

        <div className="rounded-xl bg-white p-6 shadow-lg">
          {/* 할 일 입력 */}
          <TodoInput addTodo={addTodo} />

          {/* 할 일 목록 */}
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

          {/* 통계 표시 */}
          <TodoStats totalCount={totalCount} completedCount={completedCount} />

          {/* footer 버튼 */}
          <div className="mt-4 flex gap-2">
            <FooterBtn
              className="bg-orange-500 hover:bg-orange-600"
              onClickFn={deleteCompleted}
              text="완료된 항목 삭제"
            />
            <FooterBtn
              className="bg-red-500 hover:bg-red-600"
              onClickFn={deleteAll}
              text="전체 삭제"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
