import { useSearchParams } from 'react-router';

export function Home() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  return (
    <>
      <div>Home Page</div>
      {id && <div>id: {id}</div>}
    </>
  );
}
