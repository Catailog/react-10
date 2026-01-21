import clsx from 'clsx';

import LikeBtn from '@/lectures/lecture20/components/LikeBtn';
import useTheme from '@/lectures/lecture20/hooks/useTheme';

export default function Card({
  img,
  name,
  price,
  isLiked,
  onToggleLike,
}: {
  img: string;
  name: string;
  price: number;
  isLiked: boolean;
  onToggleLike: () => void;
}) {
  const { theme } = useTheme();

  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg bg-gray-100">
        <img
          src={img}
          className={clsx(
            'h-full w-full',
            'object-cover object-center',
            'transition-transform duration-300',
            'group-hover:scale-105',
          )}
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div>
          <p
            className={clsx(
              'text-sm transition-all',
              theme === 'light' ? 'text-gray-700' : 'text-gray-300',
            )}
          >
            {name}
          </p>
          <p
            className={clsx(
              'mt-1 text-lg font-bold',
              theme === 'light' ? 'text-gray-900' : 'text-gray-100',
            )}
          >{`${price.toLocaleString()}원`}</p>
        </div>
        <LikeBtn isLiked={isLiked} onToggleLike={onToggleLike} />
      </div>
    </div>
  );
}
