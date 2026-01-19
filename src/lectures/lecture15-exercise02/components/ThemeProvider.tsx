import { useState } from 'react';

import { ThemeContext } from '@/lectures/lecture15-exercise02/components/ThemeContext';
import type { Theme } from '@/lectures/lecture15-exercise02/types/theme';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);
  const toggleTheme = () => {
    setTheme((prev) => {
      const cur = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', cur);
      return cur;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

function getStoredTheme(): Theme {
  const stored = localStorage.getItem('theme');
  return stored === 'light' || stored === 'dark' ? stored : 'light';
}
