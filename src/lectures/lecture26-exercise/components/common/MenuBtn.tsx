import React from 'react';

export default function MenuBtn({
  onClick,
  children,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button className="cursor-pointer rounded-lg p-2 text-left transition-all" onClick={onClick}>
      {children}
    </button>
  );
}
