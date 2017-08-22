import React from 'react';
import MovieDetail from '../components/MovieDetails.jsx';
import MovieSelector from '../components/MovieSelector.jsx';

class MoviesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      movies: [],
      focusMovie: null
    };
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
        <MovieSelector movies={this.state.movies} selectMovie={this.setFocusMovie.bind(this)} />
        <MovieDetail movie={this.state.focusMovie} />
      </div>
      );
  }
}

export default MoviesContainer