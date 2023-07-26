const SearchBar = ({ onChange }) => {
  return (
    <div className="container min-w-full my-10 p-2  flex flex-col justify-center items-center ">
      <input
        type="text"
        className="bg-white p-5 shadow-lg w-3/4 ease-out duration-300 rounded-lg"
        placeholder="Search book.."
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
