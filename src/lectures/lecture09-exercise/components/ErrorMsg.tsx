import { useNavigate } from 'react-router';

import type { ErrorMsgProps } from '@/lectures/lecture09-exercise/types/errorMsgProps';

export default function ErrorMsg({ msg, onClick }: ErrorMsgProps) {
  const navigate = useNavigate();
  let btnTxt = '다시 시도';
  let btnHandle = onClick;
  if (!onClick) {
    btnTxt = '이전 화면으로';
    btnHandle = () => navigate(-1);
  }
  return (
    <div className="max-w-md rounded-lg bg-red-50 p-6 text-center">
      <div className="mb-4 text-5xl">❌</div>
      <h2 className="mb-2 text-xl font-bold text-red-700">오류가 발생했습니다</h2>
      <p className="mb-4 text-red-600">{msg}</p>
      <button
        className="rounded-lg bg-red-500 px-6 py-2 font-semibold text-white hover:bg-red-600"
        onClick={btnHandle}
      >
        {btnTxt}
      </button>
    </div>
  );
}
