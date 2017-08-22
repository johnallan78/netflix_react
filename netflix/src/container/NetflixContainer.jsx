import React from 'react';
import ActorContainer from './ActorContainer.jsx';
import MoviesContainer from './MoviesContainer.jsx';
import _ from 'lodash';

class NetflixContainer extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      movies: [],
      focusMovie: null,
      firstName: null,
      secondName: null
    };
  }

  setName(firstName, secondName){
      this.setState({
          firstName: firstName,
          secondName: secondName
      });
  }

  componentWillUpdate(nextProps, nextState){
    if(!nextState.firstName || _.isEqual(nextState.firstName,this.state.firstName)){
      return;
    }
    const url ="https://netflixroulette.net/api/api.php?actor="+ nextState.firstName + "%20" + nextState.secondName;
    console.log(url);
    const request = new XMLHttpRequest();
    request.open("GET", url);
    console.log(url)
    request.addEventListener('load', () => {
      if(request.status === 200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        console.log(data);
        this.setState({
          movies: data,
          focusMovie: data[0]
        });
      }
    });
    request.send()
  }
  

  render(){
    return(
      <div>
        <ActorContainer actor={this.state.actor} selectActor={this.setName.bind(this)} />
        <MoviesContainer movies={this.state.movies}/>
      </div>
      );
  }

}


export default NetflixContainer;