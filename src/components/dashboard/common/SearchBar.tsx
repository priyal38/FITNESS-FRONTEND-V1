import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
// interface Props {
//   onSearch: (query: string) => void;
// }

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSearch(searchQuery); // Trigger search callback

    // Update URL query parameter and navigate to search results page
    navigate(`?q=${searchQuery}`);
  };

  return (
    <div>   
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="relative w-96">
            <input
              type="text"
              className="border text-md rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full ps-5 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="Enter search query here"
              value={searchQuery}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 h-full text-white rounded-e-lg border items-center border-gray-600 focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-400"
            >
              <IoSearch />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
