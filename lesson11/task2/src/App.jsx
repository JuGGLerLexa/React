import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
  state = {
    isOpen: false,
  };
  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };
  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };
  render() {
    const elem = <p>Some text</p>;
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show dialog
        </button>
        <Dialog
          isOpen={this.state.isOpen}
          onClose={this.hideDialog}
          title="some title"
          content={elem}
        >
          {elem}
        </Dialog>
      </div>
    );
  }
}

export default App;
