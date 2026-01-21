import React from 'react';

// boolean 상태를 토글하고 명시적으로 설정할 수 있는 기능 제공
function useToggle(initialValue: boolean = false) {
  const [value, setValue] = React.useState(initialValue);

  const toggle = () => {
    // 여기에 코드를 작성하세요
    setValue((prev) => !prev);
  };

  const setTrue = () => {
    // 여기에 코드를 작성하세요
    setValue(true);
  };

  const setFalse = () => {
    // 여기에 코드를 작성하세요
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
