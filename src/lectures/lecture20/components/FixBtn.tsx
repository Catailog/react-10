import clsx from 'clsx';

interface FixBtnProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function FixBtn({ children, onClick }: FixBtnProps) {
  return (
    <button
      className={clsx(
        'flex h-16 w-16 items-center justify-center',
        'cursor-pointer rounded-full bg-blue-600 p-4 text-white shadow-lg',
        'focus:ring-opacity-75 focus:ring-2 focus:ring-blue-400 focus:outline-none',
        'hover:bg-blue-700',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
