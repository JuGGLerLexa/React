import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  toggler = () => {
    this.setState ({
      active: !this.state.active
    })
  };
  
  render () {
    return (
      <button 
      className="toggler"
      onClick={this.toggler}>
        {this.state.active ? 'On' : 'Off'}
      </button>
    );
  }
}
export default Toggler;
