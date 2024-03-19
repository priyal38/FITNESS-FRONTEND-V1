import React, { useState } from 'react';

type Props = {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSubcategories: string[];
  setSelectedSubcategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedDifficulties: string[];
  setSelectedDifficulties: React.Dispatch<React.SetStateAction<string[]>>;
  onFilterChange: () => void;
};

const Filters = ({ selectedCategories, setSelectedCategories, selectedSubcategories,setSelectedSubcategories,selectedDifficulties, setSelectedDifficulties,onFilterChange
}: Props) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
      };
    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
          setSelectedCategories(prevCategories => [...prevCategories, value]);
        } else {
          setSelectedCategories(prevCategories => prevCategories.filter(category => category !== value));
        }
      };

  const handleSubcategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
        setSelectedSubcategories(prevCategories => [...prevCategories, value]);
    } else {
        setSelectedSubcategories(prevCategories => prevCategories.filter(subcategory => subcategory !== value));
    }
  };

  const handleDifficultyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
        setSelectedDifficulties(prevCategories => [...prevCategories, value]);
    } else {
        setSelectedDifficulties(prevCategories => prevCategories.filter(level => level !== value));
    }
  };

  return (
    <div>
    <div className="flex flex-col ">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        onClick={handleDropdownToggle}
        className="text-white focus:ring-1 tracking-wider focus:outline-none font-medium rounded-lg text-md px-4 py-2 text-center inline-flex items-center bg-primary-500 hover:bg-primary-400 w-48 focus:ring-primary-600"
        type="button"
      >
       Apply Filters
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {showDropdown && (
        <div className=" mt-2 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Category</h6>
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            <li className="flex items-center">
              <input
                id="gym"
                type="checkbox"
                value="gym"
                checked={selectedCategories.includes('gym')}
                onChange={handleCategoryChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Gym 
              </label>
            </li>
            <li className="flex items-center">
              <input
                
                type="checkbox"
                value="home"
                checked={selectedCategories.includes('home')}
                onChange={handleCategoryChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Home
              </label>
            </li>

            {/* Add similar list items for other categories */}

          </ul>

          
            <h6 className="mt-4 mb-3 text-sm font-medium text-gray-900 dark:text-white">Subcategory</h6>
            <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
              <li className="flex items-center">
                <input
                
                  type="checkbox"
                  value="back"
                  checked={selectedSubcategories.includes('back')}
                  onChange={handleSubcategoryChange}
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label htmlFor="cardio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                  Back
                </label>
              </li>
              {/* Add similar list items for other subcategories */}
            </ul>

            <h6 className="mt-4 mb-3 text-sm font-medium text-gray-900 dark:text-white">Difficulty Level</h6>
            <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
              <li className="flex items-center">
                <input
                 
                  type="checkbox"
                  value="beginner"
                  checked={selectedDifficulties.includes('beginner')}
                  onChange={handleDifficultyChange}
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label htmlFor="beginner" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                  Beginner
                </label>
              </li>
              {/* Add similar list items for other difficulty levels */}
            </ul>
          <button onClick={onFilterChange} className="bg-primary-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600">
            Apply Filters
          </button>
        </div>
      )}
    </div>
  </div>
  );
};

export default Filters;
