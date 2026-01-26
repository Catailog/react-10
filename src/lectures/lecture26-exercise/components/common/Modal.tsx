import MenuButton from '@/lectures/lecture26-exercise/components/common/MenuButton';

export default function Modal({
  children,
  toggleModal,
}: {
  children: React.ReactNode;
  toggleModal: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800">
        <div className="mb-4 flex items-center justify-between border-b pb-4 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">제품 상세</h2>
          <MenuButton onClick={toggleModal}>✕</MenuButton>
        </div>
        {children}
      </div>
    </div>
  );
}
