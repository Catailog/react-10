import type { Theme } from '@/lectures/lecture26-exercise/features/theme/theme';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
