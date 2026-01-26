import { Link } from 'react-router';

import MenuButton from '@/lectures/lecture26-exercise/components/common/MenuButton';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 py-10">
      <Link to="/lecture26-ex/product">
        <MenuButton>Products</MenuButton>
      </Link>
    </div>
  );
}
