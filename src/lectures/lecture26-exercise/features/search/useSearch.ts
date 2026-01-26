import React from 'react';

import { SearchContext } from '@/lectures/lecture26-exercise/features/search/searchContext';
import type { SearchContextType } from '@/lectures/lecture26-exercise/features/search/searchContextType';

export default function useSearch() {
  const searchProvider = React.useContext<SearchContextType>(SearchContext);

  return searchProvider;
}
