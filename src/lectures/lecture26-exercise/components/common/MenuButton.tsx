export default function MenuButton({
  onClick,
  children,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="cursor-pointer rounded-lg p-2 text-left transition-all hover:bg-gray-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
