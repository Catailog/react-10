import { useParams } from 'react-router';

export default function City() {
  const { city } = useParams<{ city: string }>();

  return (
    <div>
      Welcome to <span className="font-bold">{city?.toUpperCase()}</span>
    </div>
  );
}
