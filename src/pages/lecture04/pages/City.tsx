import { useParams } from 'react-router';

export function City() {
  const { city } = useParams<{ city: string }>();
  return (
    <div>
      Welcome to <span className="italic underline">{city}</span>
    </div>
  );
}
