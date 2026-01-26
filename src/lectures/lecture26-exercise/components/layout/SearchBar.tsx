import React from 'react';

import useSearch from '@/lectures/lecture26-exercise/features/search/useSearch';

export default function SearchBar() {
  const { searchTerm, handleSearchChange, setDebouncedTerm } = useSearch();

  React.useEffect(() => {
    const inputTimeout = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(inputTimeout);
    };
  }, [searchTerm, setDebouncedTerm]);

  return (
    <div className="flex flex-1 flex-row rounded-lg border border-gray-300 py-2 focus:border-blue-500 focus:outline-none">
      <p className="mx-2">🔍</p>
      <input
        placeholder="제품 검색..."
        type="text"
        className="flex-1 outline-0"
        onChange={handleSearchChange}
      />
    </div>
  );
}
