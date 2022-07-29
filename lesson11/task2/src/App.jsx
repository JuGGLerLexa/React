import React, { Component } from "react";
import Dialog from './Dialog';

class App extends Component {
  render() {
    const elem = (
      <p>Some text</p>
    )
    return (
      <div className="app">
        <Dialog content={elem} />
      </div>
    );
  }
}

export default App;
