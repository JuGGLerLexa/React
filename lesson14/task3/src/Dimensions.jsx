import React, { Component } from 'react';

class Dimensions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    const { innerHeight, innerWidth } = window;
    this.setDimensions({ width: innerWidth, height: innerHeight });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions({ width: innerWidth, height: innerHeight });
  };

  setDimensions = ({ width, height }) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  render() {
    const { width, height } = this.state;
    return <div className="dimensions">{`${width}px - ${height}px`}</div>;
  }
}

export default Dimensions;
