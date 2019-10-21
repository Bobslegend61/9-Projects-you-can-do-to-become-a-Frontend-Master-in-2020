import { connect } from 'react-redux';
import Home from '../components/Home';
import { searchMovies } from '../actions';

const mapStateToProps = state => ({
  movies: state.movie
});

const mapDispatchToProps = dispatch => ({
  searchMovies: (movieName = 'Hellboy') => dispatch(searchMovies(movieName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
