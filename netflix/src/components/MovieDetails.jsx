import React from 'react';

class MovieDetail extends React.Component{
  render(){
    if(!this.props.movie){
      return null;
    }
    return(
      <div>
        <h2>{this.props.movie.show_title}</h2>
        <p>Release Year: {this.props.movie.release_year}</p>
        <p>Category: {this.props.movie.category}</p>
        <img src={this.props.movie.poster} alt={this.props.movie.show_title} />
      </div> 
      )
  }

}

export default MovieDetail;