import { createContext } from 'react';

import type { ThemeContextType } from '@/lectures/lecture15-exercise02/types/themeContextType';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});
