import Article from '@/lectures/lecture15-exercise02/components/Article';
import MainCards from '@/lectures/lecture15-exercise02/components/MainCards';
import MainTitle from '@/lectures/lecture15-exercise02/components/MainTitle';
import PrimaryBtn from '@/lectures/lecture15-exercise02/components/PrimaryBtn';
import SecondaryBtn from '@/lectures/lecture15-exercise02/components/SecondaryBtn';
import useLang from '@/lectures/lecture15-exercise02/hooks/useLang';

const PRIMARY_BTN_TXT = {
  ko: '주요 버튼',
  en: 'Primary Button',
} as const;
const SECONDARY_BTN_TXT = {
  ko: '보조 버튼',
  en: 'Secondary Button',
} as const;

const ARTICLE_TITLE_TXT = {
  ko: '버튼 예시',
  en: 'Button Examples',
} as const;

export default function Main() {
  const { lang } = useLang();
  const primaryBtnTxt = PRIMARY_BTN_TXT[lang];
  const secondaryBtnTxt = SECONDARY_BTN_TXT[lang];

  const articleTitleTxt = ARTICLE_TITLE_TXT[lang];

  return (
    <>
      <MainTitle />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <MainCards />
      </div>
      <div className="mt-8">
        <Article title={articleTitleTxt}>
          <div className="flex gap-4">
            <PrimaryBtn>{primaryBtnTxt}</PrimaryBtn>
            <SecondaryBtn>{secondaryBtnTxt}</SecondaryBtn>
          </div>
        </Article>
      </div>
    </>
  );
}
