export default function SearchBar() {
  return (
    <div className="flex flex-1 flex-row rounded-lg border border-gray-300 py-2 focus:border-blue-500 focus:outline-none">
      <p className="mx-2">🔍</p>
      <input placeholder="제품 검색..." type="text" className="outline-0" />
    </div>
  );
}
