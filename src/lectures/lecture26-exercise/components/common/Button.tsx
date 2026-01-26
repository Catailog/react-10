import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'lg';
type ButtonType = 'submit' | 'reset' | 'button';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: ButtonType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button(buttonProps: ButtonProps) {
  const {
    variant = 'primary',
    size = 'sm',
    type = 'button',
    onClick,
    children,
    className = '',
  } = buttonProps;
  const baseStyle =
    'px-4 py-2 transition-all cursor-pointer rounded-lg disabled:cursor-not-allowed disabled:opacity-50';
  const variantStyle = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 font-semibold',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold',
  };
  const sizeStyle = {
    xm: 'px-3 py-1',
    sm: 'p-2 text-sm',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyle, variantStyle[variant], sizeStyle[size], className)}
    >
      {children}
    </button>
  );
}
