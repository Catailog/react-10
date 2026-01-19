import Card from '@/lectures/lecture15-exercise02/components/Card';
import useLang from '@/lectures/lecture15-exercise02/hooks/useLang';

const CARD_DATA = [
  {
    txt: {
      ko: 'Context API를 사용하면 Props Drilling 없이 전역 상태를 관리할 수 있습니다.',
      en: 'Using the Context API, you can manage global state without prop drilling.',
    },
  },
  {
    txt: {
      ko: 'useContext 훅으로 어떤 깊이의 컴포넌트에서도 데이터에 접근할 수 있습니다.',
      en: 'With the useContext hook, you can access data from components at any depth.',
    },
  },
  {
    txt: {
      ko: '테마가 변경되면 모든 컴포넌트가 자동으로 업데이트됩니다.',
      en: 'When the theme changes, all components are automatically updated.',
    },
  },
  {
    txt: {
      ko: 'localStorage를 활용하여 사용자의 테마 선택을 저장할 수 있습니다.',
      en: 'You can store the user’s theme preference using localStorage.',
    },
  },
] as const;
export default function MainCards() {
  const { lang } = useLang();

  const cards = CARD_DATA.map((data, idx) => ({
    txt: data.txt[lang],
    id: idx + 1,
  }));

  return (
    <>
      {cards.map((card, idx) => (
        <Card key={card.id} txt={card.txt} idx={idx + 1} />
      ))}
    </>
  );
}
