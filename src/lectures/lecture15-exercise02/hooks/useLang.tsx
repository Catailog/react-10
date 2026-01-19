import { useContext } from 'react';

import { LangContext } from '@/lectures/lecture15-exercise02/components/LangContext';
import type { LangContextType } from '@/lectures/lecture15-exercise02/types/langContextType';

export default function useLang() {
  const context = useContext<LangContextType>(LangContext);
  if (!context) {
    throw new Error('useLang must be used within LangProvider');
  }
  return context;
}
