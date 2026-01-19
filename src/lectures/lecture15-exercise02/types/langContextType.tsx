import type { Lang } from '@/lectures/lecture15-exercise02/types/lang';

export type LangContextType = {
  lang: Lang;
  toggleLang: () => void;
};
