export default function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center rounded-lg border-8 border-emerald-500 bg-emerald-100 p-8">
      {children}
    </div>
  );
}
