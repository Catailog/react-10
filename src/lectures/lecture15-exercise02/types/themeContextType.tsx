import type { Theme } from '@/lectures/lecture15-exercise02/types/theme';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
