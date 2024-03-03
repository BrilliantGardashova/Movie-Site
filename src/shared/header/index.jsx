import  "./style.css"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({logo, title, subTitle}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    const handleSearch = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=246a451242f816b49952a0d3c24a27b6&query=${searchTerm}`);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          navigate(`/search/${searchTerm}`);
        } else {
        }
      } catch (error) {
        console.error('Error searching movies: ', error);
      }
    };
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    };
  
    return (
            <div className="header">
                <div className="left">
                    <img className="left-logo" src={logo} alt="logo" />
                    <div className="info">
                    <h4>{title}</h4>
                    <p>{subTitle}</p>
                    </div>
                </div>
                <div className="right">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                />
                <button onClick={handleSearch}>Search</button>
                    <Link activeClassName='is-active' to="/">Home</Link>
                    <Link activeClassName='is-active' to="/popular">Now Playing</Link>
                    
                </div>
            </div>
    )

}

export default Header;