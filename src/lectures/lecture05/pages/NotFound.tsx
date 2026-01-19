import { useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/')}>홈으로</button>
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </>
  );
}
