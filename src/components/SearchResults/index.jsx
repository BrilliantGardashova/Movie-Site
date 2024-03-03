import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from "../../helpers/fetch";
import Card from "../../components/Card";

const SearchResults = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getMovies(`/search/movie?query=${query}`).then(setSearchResults);
  }, [query]);

  return (
    <div className='container'>
      <h2>Search Results for: {query}</h2>
      {
        searchResults && searchResults.length > 0 ? (
          searchResults.map((item, index) => {
            return <Card key={index} item={item} />
          })
        ) : (
          <p>No results found</p>
        )
      }
    </div>
  );
};

export default SearchResults;
