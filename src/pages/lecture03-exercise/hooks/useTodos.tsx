import React from 'react';
import type { Todo } from '../types/todo';

export function useTodos() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  // 할 일 추가 함수
  const addTodo = (text: string) => {
    // 1. 빈 문자열 체크
    if (text.trim().length === 0) return;
    // 2. 새로운 Todo 객체 생성 (id는 crypto.randomUUID() 사용)
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    // 3. setTodos로 상태 업데이트
    setTodos([...todos, newTodo]);
  };

  // 할 일 삭제 함수
  const deleteTodo = (id: string) => {
    // filter를 사용하여 해당 id를 제외한 새 배열 생성
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...filteredTodos]);
  };

  // 완료 상태 토글 함수
  const toggleTodo = (id: string) => {
    // map을 사용하여 해당 id의 completed 값을 반전
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  // 통계 계산
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  // 하단 버튼
  const deleteAll = () => {
    setTodos([]);
  };
  const deleteCompleted = () => {
    const filteredTodos = todos.filter((todo) => !todo.completed);
    setTodos([...filteredTodos]);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    deleteAll,
    deleteCompleted,
    totalCount,
    completedCount,
  };
}
