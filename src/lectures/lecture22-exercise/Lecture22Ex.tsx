import React from 'react';

import UseDebounceDemo from '@/lectures/lecture22-exercise/components/UseDebounceDemo';
import UseFetchDemo from '@/lectures/lecture22-exercise/components/UseFetchDemo';
import UseLocalStorageDemo from '@/lectures/lecture22-exercise/components/UseLocalStorageDemo';
import UseToggleDemo from '@/lectures/lecture22-exercise/components/UseToggleDemo';

import useDebounce from './hooks/useDebounce';
import useFetch from './hooks/useFetch';

// API 응답 타입
export interface User {
  id: number;
  name: string;
  email: string;
}

export default function Lecture22Ex() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const {
    data: users,
    loading,
    error,
    refetch,
  } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

  // 검색 필터링
  const filteredUsers = React.useMemo(() => {
    if (!users) return [];
    if (!debouncedSearchTerm) return users;

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    );
  }, [users, debouncedSearchTerm]);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">🔧 Custom Hooks 데모</h1>
        <UseLocalStorageDemo />
        <UseToggleDemo />
        <UseDebounceDemo
          debouncedSearchTerm={debouncedSearchTerm}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <UseFetchDemo
          loading={loading}
          error={error}
          refetch={refetch}
          debouncedSearchTerm={debouncedSearchTerm}
          filteredUsers={filteredUsers}
        />
      </div>
    </div>
  );
}
