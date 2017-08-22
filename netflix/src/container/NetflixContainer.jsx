import React from 'react';
import Actor from './ActorContainer.jsx';
import Movies from './MoviesContainer.jsx';

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

  componentDidUpdate(){
    const url ="https://netflixroulette.net/api/api.php?actor="+ this.state.firstName + "%20" + this.state.secondName;
    console.log(url);
    const request = new XMLHttpRequest();
    request.open("GET", url);
    console.log(url)
    request.addEventListener('click', () => {
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
        <Actor actor={this.state.actor} selectActor={this.setName.bind(this)} />
        <Movies />
      </div>
      );
  }

}


export default NetflixContainer;