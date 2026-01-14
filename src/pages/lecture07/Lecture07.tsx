import { useState } from 'react';
import { Button } from '../../components/Button';

export default function Lecture07() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      {isLoggedIn ? 'Online' : 'Offline'}
      <Button onClick={handleLogin}>로그인</Button>
    </>
  );
}
