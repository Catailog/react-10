import { useEffect, useState } from 'react';

import clsx from 'clsx';

import Card from '@/lectures/lecture20/components/Card';
import { PRODUCT_DATA } from '@/lectures/lecture20/constants/productData';
import useTheme from '@/lectures/lecture20/hooks/useTheme';

export default function Cards() {
  const productData = PRODUCT_DATA;
  const [likes, setLikes] = useState<number[]>(() => {
    const stored = localStorage.getItem('likes');
    return stored ? JSON.parse(stored) : [];
  });
  const { theme } = useTheme();

  const onToggleLike = (productId: number) => {
    setLikes((prev) => {
      return prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
    });
  };
  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  return (
    <div
      className={clsx(
        'mx-auto max-w-7xl px-4 py-16 transition-all sm:px-6 lg:px-8',
        theme === 'light' ? 'bg-white' : 'bg-gray-700',
      )}
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {productData.map((product) => {
          return (
            <Card
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              isLiked={likes.includes(product.id)}
              onToggleLike={() => onToggleLike(product.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
