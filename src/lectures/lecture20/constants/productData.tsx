import imgUrl1 from '@/lectures/lecture20/assets/product1.png';
import imgUrl2 from '@/lectures/lecture20/assets/product2.png';
import imgUrl3 from '@/lectures/lecture20/assets/product3.png';
import imgUrl4 from '@/lectures/lecture20/assets/product4.png';
import imgUrl5 from '@/lectures/lecture20/assets/product5.png';
import imgUrl6 from '@/lectures/lecture20/assets/product6.png';
import imgUrl7 from '@/lectures/lecture20/assets/product7.png';

export const PRODUCT_DATA = [
  {
    id: 1,
    name: '버그를 Java라 버그잡는 개리씨 키링 개발...',
    price: 12500,
    img: imgUrl1,
  },
  {
    id: 2,
    name: '우당탕탕 라이캣의 실험실 스티커 팩',
    price: 3500,
    img: imgUrl2,
  },
  {
    id: 3,
    name: '딥러닝 개발자 무릎 담요',
    price: 17500,
    img: imgUrl3,
  },
  {
    id: 4,
    name: '네 개발잡니다 개발자키링 금속키링',
    price: 13500,
    img: imgUrl4,
  },
  {
    id: 5,
    name: 'Hack Your Life 개발자 노트북 파우치',
    price: 36000,
    img: imgUrl5,
  },
  {
    id: 6,
    name: '[NEW] 위니브 개발자, 캐릭터 스티커팩 2종',
    price: 5500,
    img: imgUrl6,
  },
  {
    id: 7,
    name: '제주코딩베이스캠프 코딩 연습장 세트',
    price: 8000,
    img: imgUrl7,
  },
] as const;
