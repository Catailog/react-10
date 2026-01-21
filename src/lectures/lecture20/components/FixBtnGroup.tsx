import React from 'react';

export default function FixBtnGroup({ children }: { children: React.ReactNode }) {
  return <div className="fixed top-8 right-8 z-50 flex flex-col gap-2">{children}</div>;
}
