import { createContext } from 'react';

import type { ThemeContextType } from '@/lectures/lecture20/types/themeContextType';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});
