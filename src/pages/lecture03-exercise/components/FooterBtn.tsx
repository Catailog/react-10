// 하단 버튼
export function FooterBtn({
  className,
  onClickFn,
  text,
}: {
  className: string;
  onClickFn: () => void;
  text: string;
}) {
  const onClick = () => {
    onClickFn();
  };

  return (
    <button
      className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
