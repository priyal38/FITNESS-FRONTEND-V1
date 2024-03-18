// SearchResultPage.tsx

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import WorkoutCard from '../../components/dashboard/workout/WorkoutCard';
import BlogCard from '../../components/dashboard/blog/BlogCard';
import RecipeCard from '../../components/dashboard/recipe/RecipeCard';
import React from 'react';




const SearchResultPage = () => {
    const { page, query } = useParams<{ page: string; query: string }>();
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/${page}?q=${query}`);
        setSearchResults(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page, query]);
  // Function to render different types of cards based on the search result's source
  const renderCard = (result: any) => {
    switch (page) {
      case 'fitness':
        return <WorkoutCard key={result._id} data={result} />;
      case 'food':
        // return <BlogCard key={result._id} data={result} />;
      case 'technology':
        // return <RecipeCard key={result._id} data={result} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Search Results for {page}</h1>
          <ul>
            {searchResults.map((result) => (
              <li key={result._id}>
                {/* Render the appropriate card based on the page */}
                {renderCard(result)}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SearchResultPage;
