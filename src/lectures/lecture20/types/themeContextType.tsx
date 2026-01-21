import type { Theme } from '@/lectures/lecture20/types/theme';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
