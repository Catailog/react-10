import { useContext } from 'react';

import { ThemeContext } from '@/lectures/lecture15-exercise02/components/ThemeContext';
import type { ThemeContextType } from '@/lectures/lecture15-exercise02/types/themeContextType';

export default function useTheme() {
  const context = useContext<ThemeContextType>(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
