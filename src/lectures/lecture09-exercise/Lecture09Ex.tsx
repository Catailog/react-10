import { useEffect, useState } from 'react';

import ErrorMsg from '@/lectures/lecture09-exercise/components/ErrorMsg';
import GridCardContainer from '@/lectures/lecture09-exercise/components/GridCardContainer';
import Spinner from '@/lectures/lecture09-exercise/components/Spinner';
import UserCard from '@/lectures/lecture09-exercise/components/UserCard';
import type { User } from '@/lectures/lecture09-exercise/types/user';

export default function Lecture09Ex() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setErrorMsg('');

      const res = await fetch('http://jsonplaceholder.typicode.com/users');
      if (!res.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await res.json();

      setUsers(data);
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : 'Failed to fetch users');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  let content = null;
  if (errorMsg) {
    content = (
      <div className="flex min-h-screen items-center justify-center">
        <ErrorMsg msg={errorMsg} />
      </div>
    );
  } else if (isLoading) {
    content = <Spinner />;
  } else {
    content = (
      <GridCardContainer>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </GridCardContainer>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">👥 User Directory</h1>
            <p className="mt-2 text-gray-600">총 {users.length}명의 사용자</p>
          </div>
          <button
            className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl"
            onClick={fetchUsers}
          >
            <span>🔄</span>
            <span>새로고침</span>
          </button>
        </div>

        {content}
      </div>
    </div>
  );
}
