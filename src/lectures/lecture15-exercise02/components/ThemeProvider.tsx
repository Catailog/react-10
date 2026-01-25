import { useState } from 'react';
import React from 'react';

import { ThemeContext } from '@/lectures/lecture15-exercise02/components/ThemeContext';
import type { Theme } from '@/lectures/lecture15-exercise02/types/theme';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  // localStorage에서 테마 불러오기
  React.useEffect(() => {
    setTheme(() => getStoredTheme());
  }, []);

  // 테마 변경 시 localStorage에 저장
  React.useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

function getStoredTheme(): Theme {
  const stored = localStorage.getItem('theme');
  return stored === 'light' || stored === 'dark' ? stored : 'light';
}
