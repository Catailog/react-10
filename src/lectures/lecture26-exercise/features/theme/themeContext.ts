import { createContext } from 'react';

import type { ThemeContextType } from '@/lectures/lecture26-exercise/features/theme/themeContextType';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});
