import React, { Component } from 'react';

class Socialize extends Component {
  toFacebook(){
    window.open("https://www.facebook.com/foodsteez/", "_blank");
  }
  toInstagram(){
    window.open("https://www.instagram.com/foodsteez/?hl=en", "_blank");
  }
  toYoutube(){
    window.open("https://www.youtube.com/channel/UCgF7wAkTS_l9oxW3tGVlu7g", "_blank");
  }
  render() {
    return (
      <div className='socialize' id='socialize'>
        <button onClick={this.toFacebook.bind(this)}className="bar-facebook"></button>
        <button onClick={this.toInstagram.bind(this)}className="bar-instagram"></button>
        <button onClick={this.toYoutube.bind(this)}className="bar-youtube"></button> 
      </div>
    );
  }
}

export default Socialize;
