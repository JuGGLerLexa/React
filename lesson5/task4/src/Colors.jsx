import React, { Component } from "react";

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  setBodySolor = (color) => {
    document.body.style.backgroundColor = color;
  }

    render() {
    return (
    <div className="colors">
      <button 
        style={{
          backgroundColor: RED,
        }}
        onClick={this.setBodySolor.bind(this, RED)} 
        className="colors__button"
       />
             <button 
        style={{
          backgroundColor: GREEN,
        }} 
        onClick={() => this.setBodySolor(GREEN)} 
        className="colors__button"
       />
             <button 
        style={{
          backgroundColor: BLUE,
        }} 
        onClick={() => this.setBodySolor(BLUE)} 
        className="colors__button"
       />
    
    </div>
      )
    }
}

export default Colors;
