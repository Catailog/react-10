import { useContext } from 'react';

import { ThemeContext } from '@/lectures/lecture20/components/ThemeContext';
import type { ThemeContextType } from '@/lectures/lecture20/types/themeContextType';

export default function useTheme() {
  const themeProvider = useContext<ThemeContextType>(ThemeContext);

  return themeProvider;
}
