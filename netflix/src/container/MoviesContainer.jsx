import React from 'react';
import MovieDetail from '../components/MovieDetails.jsx';
import MovieSelector from '../components/MovieSelector.jsx';

class MoviesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      focusMovie: null
    };
  }

  setMovies(movies){
      this.setState({
          movies: movies
      });
  }

  setFocusMovie(movie){
    this.setState({
      focusMovie: movie
    });
  }

  render(){
    return(
      <div>
        <h2>List of movies</h2>
        <MovieSelector movies={this.props.movies} selectMovie={this.setFocusMovie.bind(this)} />
        <MovieDetail movie={this.state.focusMovie}/>
      </div>
      );
  }
}

export default MoviesContainer