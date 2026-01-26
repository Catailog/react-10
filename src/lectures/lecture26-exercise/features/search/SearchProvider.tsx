import React from 'react';

import { SearchContext } from '@/lectures/lecture26-exercise/features/search/searchContext';

export default function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [debouncedTerm, setDebouncedTerm] = React.useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchContext.Provider
      value={{ searchTerm, handleSearchChange, debouncedTerm, setDebouncedTerm }}
    >
      {children}
    </SearchContext.Provider>
  );
}
