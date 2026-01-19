interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export function Button(buttonProps: ButtonProps) {
  const { children, onClick } = buttonProps;
  return (
    <button
      className="cursor-pointer rounded-lg bg-emerald-300 px-4 py-2 font-bold hover:bg-emerald-500 active:bg-emerald-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
