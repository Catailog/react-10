export default function SecondaryButton({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-lg bg-gray-200 p-2 text-sm transition-all hover:bg-gray-300"
    >
      {children}
    </button>
  );
}
