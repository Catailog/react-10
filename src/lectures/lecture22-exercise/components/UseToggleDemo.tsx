import Modal from '@/lectures/lecture22-exercise/components/Modal';
import useToggle from '@/lectures/lecture22-exercise/hooks/useToggle';

export default function UseToggleDemo() {
  const modal = useToggle(false);

  return (
    <section className="mb-8 rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">2️⃣ useToggle</h2>
      <p className="mb-4 text-gray-600">
        boolean 상태를 쉽게 토글하고 명시적으로 설정할 수 있습니다.
      </p>
      <div className="flex gap-4">
        <button
          onClick={modal.toggle}
          className="rounded-lg bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-600"
        >
          모달 토글
        </button>
        <button
          onClick={modal.setTrue}
          className="rounded-lg bg-green-500 px-6 py-2 font-semibold text-white hover:bg-green-600"
        >
          모달 열기
        </button>
        <button
          onClick={modal.setFalse}
          className="rounded-lg bg-gray-500 px-6 py-2 font-semibold text-white hover:bg-gray-600"
        >
          모달 닫기
        </button>
      </div>
      <p className="mt-4">
        현재 모달 상태: <span className="font-bold">{modal.value ? '열림 ✅' : '닫힘 ❌'}</span>
      </p>
      <Modal isOpen={modal.value} onClose={modal.setFalse} />
    </section>
  );
}
