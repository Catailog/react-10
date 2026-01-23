import { useContext } from 'react';

import { ThemeContext } from '@/lectures/lecture26-exercise/features/theme/themeContext';
import type { ThemeContextType } from '@/lectures/lecture26-exercise/features/theme/themeContextType';

export default function useTheme() {
  const themeProvider = useContext<ThemeContextType>(ThemeContext);

  return themeProvider;
}
