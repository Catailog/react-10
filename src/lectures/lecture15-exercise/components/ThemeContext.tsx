import React from 'react';

import type { ThemeContextType } from '@/lectures/lecture15-exercise/types/themeContextType';

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});
