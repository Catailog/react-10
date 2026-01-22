import React from 'react';

// boolean 상태를 토글하고 명시적으로 설정할 수 있는 기능 제공
function useToggle(initialValue: boolean = false) {
  const [value, setValue] = React.useState(initialValue);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  const setTrue = () => {
    setValue(true);
  };

  const setFalse = () => {
    setValue(false);
  };

  return {
    value,
    toggle,
    setTrue,
    setFalse,
  };
}

export default useToggle;
