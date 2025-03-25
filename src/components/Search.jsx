import React from "react";

const Search = () => {
  return (
    <div className="flex items-center lg:w-70 bg-violet-100 pl-2 rounded-lg focus-within:outline-2 focus-within:outline-violet-900 focus-within:outline-offset-2">
      <input
        className="border-0 outline-0 grow-1"
        type="text"
        placeholder="Search jou onderwerp..."
      />
      <button className="flex items-center justify-center size-10 hover:bg-violet-300 text-violet-900 rounded-lg cursor-pointer">
        <i class="bx bx-search text-2xl"></i>
      </button>
    </div>
  );
};

export default Search;
