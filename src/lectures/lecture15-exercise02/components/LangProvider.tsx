import { useState } from 'react';

import { LangContext } from '@/lectures/lecture15-exercise02/components/LangContext';
import type { Lang } from '@/lectures/lecture15-exercise02/types/lang';

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(getStoredLang);
  const toggleLang = () => {
    setLang((prev) => {
      const cur = prev === 'ko' ? 'en' : 'ko';
      localStorage.setItem('lang', cur);
      return cur;
    });
  };
  return <LangContext.Provider value={{ lang, toggleLang }}>{children}</LangContext.Provider>;
}

function getStoredLang(): Lang {
  const stored = localStorage.getItem('lang');
  return stored === 'ko' || stored === 'en' ? stored : 'ko';
}
