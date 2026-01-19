import { useContext } from 'react';

import ThemeButton from './ThemeButton';
import { ThemeContext } from './ThemeContext';

export default function Toolbar() {
  const { theme } = useContext(ThemeContext);
  const style = {
    background: theme === 'dark' ? '#333' : '#FFF',
    color: theme === 'dark' ? '#FFF' : '#333',
  };

  return (
    <div style={style}>
      <ul className="mb-4 list-disc pl-5">
        <li>목록1</li>
        <li>목록2</li>
        <li>목록3</li>
      </ul>
      <ThemeButton />
    </div>
  );
}
