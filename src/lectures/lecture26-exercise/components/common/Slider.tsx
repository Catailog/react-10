interface SliderProps {
  min: string;
  max: string;
  step: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

export default function Slider(sliderProps: SliderProps) {
  const { min, max, step, value, onChange, children } = sliderProps;
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600 dark:text-gray-400">{children}</label>
      <input min={min} max={max} step={step} type="range" value={value} onChange={onChange} />
    </div>
  );
}
