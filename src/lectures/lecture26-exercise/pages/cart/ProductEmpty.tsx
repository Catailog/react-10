import { Link } from 'react-router';

import Button from '@/lectures/lecture26-exercise/components/common/Button';

export default function ProductEmpty() {
  return (
    <div className="flex min-h-100 items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <p className="text-6xl">🛒</p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">장바구니가 비어있습니다.</p>
        <Link to="/lecture26-ex">
          <Button variant="primary" size="md">
            쇼핑 계속하기
          </Button>
        </Link>
      </div>
    </div>
  );
}
