import React from 'react';

import type { Theme } from '@/lectures/lecture26-exercise/features/theme/theme';
import { ThemeContext } from '@/lectures/lecture26-exercise/features/theme/themeContext';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>(getCurTheme);

  React.useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

function getCurTheme(): Theme {
  const curTheme = localStorage.getItem('theme') || 'light';
  return curTheme === 'light' ? 'light' : 'dark';
}
