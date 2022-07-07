import React from "react";

const Spinner = ({ size }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };
  return <span className="spinner" style={style}></span>;
};

export default Spinner;
