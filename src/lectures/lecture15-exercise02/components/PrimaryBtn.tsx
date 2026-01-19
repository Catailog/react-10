export default function PrimaryBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="cursor-pointer rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600">
      {children}
    </button>
  );
}
