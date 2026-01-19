export default function SecondaryBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="cursor-pointer rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold transition-colors hover:bg-gray-500">
      {children}
    </button>
  );
}
