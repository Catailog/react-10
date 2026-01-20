import CssBtn1 from '@/lectures/lecture16/components/CssBtn1';
import CssBtn2 from '@/lectures/lecture16/components/CssBtn2';
import ModuleCssBtn1 from '@/lectures/lecture16/components/ModuleCssBtn1';
import ModuleCssBtn2 from '@/lectures/lecture16/components/ModuleCssBtn2';

export default function Lecture16() {
  return (
    <div className="flex flex-col items-start gap-2 text-white">
      <CssBtn1 />
      <CssBtn2 />
      <ModuleCssBtn1 />
      <ModuleCssBtn2 />
    </div>
  );
}
