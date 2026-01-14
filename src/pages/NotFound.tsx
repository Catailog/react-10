import { useNavigate } from 'react-router';
import { Button } from '../components/Button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <p>Not Found</p>
      <div className="flex gap-4">
        <Button onClick={() => navigate('/')}>홈으로</Button>
        <Button onClick={() => navigate(-1)}>이전 페이지로</Button>
      </div>
    </>
  );
}
