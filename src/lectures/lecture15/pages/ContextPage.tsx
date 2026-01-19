import React from 'react';

import { ThemeContext } from '../components/ThemeContext';
import Toolbar from '../components/Toolbar';

export default function ContextPage() {
  const [theme, setTheme] = React.useState<string>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const themeContextProps = {
    theme,
    toggleTheme,
  };

  const style = {
    background: theme === 'dark' ? '#333' : '#FFF',
    color: theme === 'dark' ? '#FFF' : '#333',
  };

  return (
    <ThemeContext value={themeContextProps}>
      <div style={style} className="p-5">
        <Toolbar />
      </div>
    </ThemeContext>
  );
}
