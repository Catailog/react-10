import { useState } from 'react';

import { Button } from '../../components/Button';

export default function Lecture07() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="flex flex-col gap-2">
      {isLoggedIn ? 'Online' : 'Offline'}
      <Button onClick={handleLogin}>{isLoggedIn ? '로그아웃' : '로그인'}</Button>
    </div>
  );
}
