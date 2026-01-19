import { useState } from 'react';

import { useNavigate } from 'react-router';

export default function ConcertsHome() {
  const navigate = useNavigate();
  const cities = ['Seoul', 'Tokyo', 'Paris'];
  const [id, setId] = useState('');
  const [city, setCity] = useState(cities[0]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.currentTarget.value;
    if (v === '') {
      setId('');
      return;
    }
    if (/^[1-9]\d*$/.test(v)) {
      setId(v);
    }
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.currentTarget.value;
    setCity(v);
  };
  const handleTrendingMove = () => {
    if (!id) return;
    navigate(`trending?id=${id}`);
  };
  const handleCityMove = () => {
    if (!city) return;
    navigate(`city/${city.toLowerCase()}`);
  };

  return (
    <>
      <div className="flex flex-row items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-white">
        <p>Trending: </p>
        <input className="border-2" value={id} onChange={handleInputChange} />
        <button
          className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 transition-all hover:bg-blue-600"
          onClick={handleTrendingMove}
        >
          이동
        </button>
      </div>
      <div className="flex flex-row items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-white">
        <p>City: </p>
        <select className="border-2" value={city} onChange={handleSelectChange}>
          {cities.map((city) => (
            <option className="text-black" value={city}>
              {city}
            </option>
          ))}
        </select>
        <button
          className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 transition-all hover:bg-blue-600"
          onClick={handleCityMove}
        >
          이동
        </button>
      </div>
    </>
  );
}
