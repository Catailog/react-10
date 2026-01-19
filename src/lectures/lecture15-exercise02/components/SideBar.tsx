import SideBarItem from '@/lectures/lecture15-exercise02/components/SideBarItem';
import useLang from '@/lectures/lecture15-exercise02/hooks/useLang';

const itemTxts = [
  { icon: '🏠', labels: { ko: '홈', en: 'Home' } },
  { icon: '📊', labels: { ko: '대시보드', en: 'Dashboard' } },
  { icon: '👥', labels: { ko: '사용자', en: 'Users' } },
  { icon: '⚙️', labels: { ko: '설정', en: 'Settings' } },
  { icon: '📧', labels: { ko: '메시지', en: 'Messages' } },
];

export default function SideBar() {
  const { lang } = useLang();

  return (
    <>
      {itemTxts.map((item) => {
        const label = lang === 'ko' ? item.labels.ko : item.labels.en;
        return <SideBarItem key={item.labels.en} txt={`${item.icon} ${label}`}></SideBarItem>;
      })}
    </>
  );
}
