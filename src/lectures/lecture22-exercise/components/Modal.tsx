export default function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
      >
        <h3 className="mb-4 text-2xl font-bold">🎉 모달 창</h3>
        <p className="mb-6 text-gray-600">
          useToggle Hook을 사용하여 모달을 쉽게 관리할 수 있습니다.
        </p>
        <button
          onClick={onClose}
          className="w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
