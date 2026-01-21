import Cards from '@/lectures/lecture20/components/Cards';
import CartFixBtn from '@/lectures/lecture20/components/CartFixBtn';
import FixBtnGroup from '@/lectures/lecture20/components/FixBtnGroup';
import ThemeFixBtn from '@/lectures/lecture20/components/ThemeFixBtn';
import ThemeProvider from '@/lectures/lecture20/components/ThemeProvider';

export default function Lecture20() {
  return (
    <ThemeProvider>
      <FixBtnGroup>
        <ThemeFixBtn />
        <CartFixBtn />
      </FixBtnGroup>
      <Cards />
    </ThemeProvider>
  );
}
