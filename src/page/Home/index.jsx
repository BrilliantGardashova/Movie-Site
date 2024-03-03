import { Outlet, useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import getMovies from "../../helpers/fetch";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMovies('/movie/popular').then(setData);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      getMovies(`/search/movie?query=${searchTerm}`).then(setSearchResults);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleCardClick = (cardData) => {
    navigate(`/movie/${cardData.id}`, { state: cardData });
  };

  const handleSearch = () => {
    setSearchTerm(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='container'>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      {
        (searchTerm ? searchResults : data).map((item, index) => {
          return <Card key={index} onClick={handleCardClick} item={item} />
        })
      }
      <Outlet />
    </div>
  );
};

export default Home;
