import { useContext } from 'react';

import { ThemeContext } from './ThemeContext';

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const style = {
    background: theme === 'dark' ? '#333' : '#FFF',
    color: theme === 'dark' ? '#FFF' : '#333',
    border: `1px solid ${theme === 'dark' ? '#FFF' : '#333'}`,
    padding: '10px 20px',
    cursor: 'pointer',
  };

  return (
    <button style={style} onClick={toggleTheme}>
      현재 테마: {theme}
    </button>
  );
}
