  import React from 'react';
  import PropTypes from 'prop-types';

  class ActorContainer extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        firstName: null,
        secondName: null
      }
    }

    handleFirstChange(event){
        this.setState({
          firstName: event.target.value
        });
    }

    handleSecondChange(event){
      this.setState({
        secondName: event.target.value
      });
    }

    render(){
      return(
        <div className="actor-info">
          <input type="text" name="firstName" onChange={this.handleFirstChange.bind(this)} />
          <input type="text" name="secondName" onChange={this.handleSecondChange.bind(this)} />
          <button onClick={() => {this.props.selectActor(this.state.firstName, this.state.secondName)}}>Submit</button>
        </div>  

        );
    }

  }

  ActorContainer.PropTypes = {
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired
  };

  export default ActorContainer;