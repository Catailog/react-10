import { createContext } from 'react';

import type { LangContextType } from '@/lectures/lecture15-exercise02/types/langContextType';

export const LangContext = createContext<LangContextType>({
  lang: 'ko',
  toggleLang: () => {},
});
