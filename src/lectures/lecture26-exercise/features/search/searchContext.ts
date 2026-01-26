import React from 'react';

import type { SearchContextType } from '@/lectures/lecture26-exercise/features/search/searchContextType';

export const SearchContext = React.createContext<SearchContextType>({
  searchTerm: '',
  handleSearchChange: () => {},
  debouncedTerm: '',
  setDebouncedTerm: () => {},
});
