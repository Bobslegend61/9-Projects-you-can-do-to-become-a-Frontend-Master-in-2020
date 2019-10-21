import React from 'react';
import PropTypes from 'prop-types';

function Movie({ movie: { Title, Poster, Year } }) {
  return (
    <div style={{ textAlign: 'center', height: '350px' }}>
      <p>{Title.split(':')[0]}</p>
      <img
        style={{
          borderRadius: '10px',
          width: '100%',
          height: '100%',
          margin: '10px'
        }}
        src={Poster}
        alt={Title}
      />
      <p>{Year}</p>
    </div>
  );
}

Movie.propTypes = {};

export default Movie;
