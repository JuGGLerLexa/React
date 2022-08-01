import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  toggleButton = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleButton}>
            {this.state.isOpen ? (
              <FontAwesomeIcon icon="fa-thin fa-angle-down" />
            ) : (
              <FontAwesomeIcon icon="fa-thin fa-angle-up" />
            )}
          </button>
        </div>
        {this.state.isOpen ? <div className="expand__content">{this.props.children}</div> : null}
      </div>
    );
  }
}

export default Expand;
