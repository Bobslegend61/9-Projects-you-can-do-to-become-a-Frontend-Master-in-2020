import axios from 'axios';

export const searchMovies = movieName => {
  return dispatch => {
    axios
      .get(`http://www.omdbapi.com/?apikey=82473281&s=${movieName}`)
      .then(({ data: { Search } }) =>
        dispatch({
          type: 'SEARCH_MOVIES',
          payload: Search
        })
      )
      .catch(err => console.log(err));
  };
};
