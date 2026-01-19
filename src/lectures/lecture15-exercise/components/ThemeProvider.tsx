import React from 'react';

import { ThemeContext } from '@/lectures/lecture15-exercise/components/ThemeContext';
import type { Theme } from '@/lectures/lecture15-exercise/types/theme';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>(getCurTheme);

  // localStorage에서 테마 불러오기
  React.useEffect(() => {
    setTheme(() => getCurTheme());
  }, []);

  // 테마 변경 시 localStorage에 저장
  React.useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 테마 토글 함수
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark';
}

function getCurTheme(): Theme {
  const curTheme = localStorage.getItem('theme');
  return isTheme(curTheme) ? curTheme : 'light';
}
