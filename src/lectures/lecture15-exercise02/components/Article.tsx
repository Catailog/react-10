export default function Article({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      {children}
    </>
  );
}
