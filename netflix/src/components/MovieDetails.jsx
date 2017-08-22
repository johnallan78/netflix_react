import React from 'react';

class MovieDetail extends React.Component{
  render(){
    if(!this.props.movie){
      return null;
    }
    return(
      <div>
        <h2>{this.props.movie.show_title}</h2>
        <h3>{this.props.movie.release_year}</h3>
        <h3>{this.props.movie.category}</h3>
        <img src={this.props.movie.poster} alt={this.props.movie.show_title} />
      </div> 
      )
  }

}

export default MovieDetail;