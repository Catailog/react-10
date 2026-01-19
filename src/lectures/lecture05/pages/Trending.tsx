import { useSearchParams } from 'react-router';

export default function Trending() {
  const [params] = useSearchParams();
  const id = params.get('id');
  return <div>ID: {id || '-'}</div>;
}
