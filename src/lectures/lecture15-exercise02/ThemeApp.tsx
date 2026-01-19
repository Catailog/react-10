import LangProvider from '@/lectures/lecture15-exercise02/components/LangProvider';
import Layout from '@/lectures/lecture15-exercise02/components/Layout';
import ThemeProvider from '@/lectures/lecture15-exercise02/components/ThemeProvider';

export default function ThemeApp() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Layout />
      </LangProvider>
    </ThemeProvider>
  );
}
