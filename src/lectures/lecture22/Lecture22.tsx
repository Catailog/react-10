import Counter from '@/lectures/lecture22/components/Counter';

export default function Lecture22() {
  return (
    <div className="flex flex-col items-center gap-8">
      <Counter initVal={0} />
      <Counter initVal={100} />
    </div>
  );
}
