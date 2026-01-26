import clsx from 'clsx';

type ButtonType = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'lg';

type ButtonProps = {
  variant?: ButtonType;
  size?: ButtonSize;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button(buttonProps: ButtonProps) {
  const { variant = 'primary', size = 'sm', onClick, children, className = '' } = buttonProps;
  const baseStyle =
    'px-4 py-2 font-semibold transition-all cursor-pointer rounded-lg disabled:cursor-not-allowed disabled:opacity-50';
  const variantStyle = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50',
  };
  const sizeStyle = {
    sm: 'p-2 text-sm',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyle, variantStyle[variant], sizeStyle[size], className)}
    >
      {children}
    </button>
  );
}
