import type { Theme } from './theme';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
