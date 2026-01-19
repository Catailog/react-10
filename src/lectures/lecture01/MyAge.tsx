import React from 'react';

import { MyContext } from './MyContext';

// export function MyAge({ age }: { age: number }) {
//   return <div className="text-2xl">My Age: {age}</div>;
// }

export function MyAge() {
  const { age } = React.useContext(MyContext);

  return <div className="text-2xl">My Age: {age}</div>;
}
