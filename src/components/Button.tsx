export function Button({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      className="bg-emerald-300 rounded-lg px-4 py-2 font-bold hover:bg-emerald-500 active:bg-emerald-700 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
