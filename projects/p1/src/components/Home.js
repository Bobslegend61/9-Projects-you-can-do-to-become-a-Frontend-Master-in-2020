import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

import './Home.css';

function Home({ movies, searchMovies }) {
  const [searchName, setSearchName] = useState('');
  useEffect(() => searchMovies(), [searchMovies]);
  return (
    <div className="Home">
      <nav className="nav">
        <p className="nav__brandName">Hooked</p>
        <div className="nav__search">
          <input
            type="text"
            className="nav__input"
            onChange={e => setSearchName(e.target.value)}
            placeholder="Search a movie"
            value={searchName}
          />

          <button
            className="nav__submit"
            onClick={() => searchMovies(searchName)}>
            Find
          </button>
        </div>
      </nav>
      <div className="container movies">
        {movies.map((movie, i) => (
          <Movie key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
