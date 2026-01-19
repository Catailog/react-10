import { useSearchParams } from 'react-router';

export default function Home() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  return (
    <>
      <div>Home Page</div>
      {id && <div>id: {id}</div>}
    </>
  );
}
