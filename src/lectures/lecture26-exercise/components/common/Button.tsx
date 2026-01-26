import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'lg';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export default function Button(buttonProps: ButtonProps) {
  const { variant = 'primary', size = 'sm', children } = buttonProps;
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
      {...buttonProps}
      className={clsx(baseStyle, variantStyle[variant], sizeStyle[size], buttonProps.className)}
    >
      {children}
    </button>
  );
}
