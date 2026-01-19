import Layout from '@/lectures/lecture15-exercise/components/Layout';
import ThemeProvider from '@/lectures/lecture15-exercise/components/ThemeProvider';

function ThemeApp() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default ThemeApp;
