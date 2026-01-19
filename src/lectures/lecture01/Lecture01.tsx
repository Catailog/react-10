import React, { useState } from 'react';

import { MyContext } from './MyContext';
import { UserInfo } from './UserInfo';

export default function Lecture01() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };

  return (
    <MyContext.Provider value={{ name, age }}>
      <div className="flex flex-col gap-1 text-left">
        <div className="flex flex-1 gap-1">
          <span className="flex-1">name: </span>
          <input
            type="text"
            name="name"
            id="name"
            className="flex-3 border-2"
            onChange={handleNameInput}
          />
        </div>
        <div className="flex flex-1 gap-1">
          <span className="flex-1">age: </span>
          <input
            type="number"
            name="age"
            id="age"
            className="flex-3 border-2"
            onChange={handleAgeInput}
          />
        </div>
        <UserInfo></UserInfo>
      </div>
    </MyContext.Provider>
  );
}
