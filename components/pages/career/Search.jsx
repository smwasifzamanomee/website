const Search = ({ inputValue, setInputValue }) => {
  return (
    <input
      className="w-[180px] md:w-full sm:w-full block py-1 rounded outline-none border px-3 text-gray-400 bg-transparent"
      type={"text"}
      name={"search"}
      id="search"
      placeholder="Search"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      autoComplete="off"
    />
  );
};

export default Search;
