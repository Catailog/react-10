import React from 'react';

import { ThemeContext } from '@/lectures/lecture15-exercise/components/ThemeContext';

export default function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
