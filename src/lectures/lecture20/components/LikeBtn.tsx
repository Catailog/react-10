import clsx from 'clsx';

import useTheme from '@/lectures/lecture20/hooks/useTheme';

export default function LikeBtn({
  isLiked,
  onToggleLike,
}: {
  isLiked: boolean;
  onToggleLike: () => void;
}) {
  const { theme } = useTheme();
  return (
    <button
      className={clsx('cursor-pointer hover:text-red-500', {
        'text-red-500': isLiked,
        'text-gray-600': !isLiked && theme === 'light',
        'text-gray-400': !isLiked && theme === 'dark',
      })}
      onClick={onToggleLike}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill={isLiked ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z"
        ></path>
      </svg>
    </button>
  );
}
