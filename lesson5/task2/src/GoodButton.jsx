import React, { Component } from "react";

class GoodButton extends Component {
  heanderClick(e) {
    alert(e.target.textContent);
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.heanderClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
