import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { MyInfo } from './pages/MyInfo';
import { Etc } from './pages/Etc';
import { ConcertsHome } from './pages/ConcertsHome';
import { Trending } from './pages/Trending';
import { City } from './pages/City';
import { Layout } from './components/Layout';

export default function Lecture04() {
  return (
    <Routes>
      <Route path="lecture04/*" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="my-info" element={<MyInfo />} />
        <Route path="etc" element={<Etc />} />

        <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path="trending" element={<Trending />} />
          <Route path=":city" element={<City />} />
        </Route>
      </Route>
    </Routes>
  );
}
