import React, { Component } from 'react';

class Menu extends Component {
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
      <div className={this.props.classes} id='menu'>
        <div>
          <h2 className='mmlink' data-page="Recipes" onClick={this.props.nav}>Recipes</h2>
          <h2 className='mmlink' data-page="WhatWeDo" onClick={this.props.nav}>What We Do</h2>
          <h2 className='mmlink' data-page="Clients" onClick={this.props.nav}>Clients</h2>
          <h2 className='mmlink' data-page="Contact" onClick={this.props.nav}>Contact</h2>
          <div>
            <button onClick={this.toFacebook.bind(this)} className='facebook' alt='facebook'></button>
            <button onClick={this.toInstagram.bind(this)} className='instagram' alt='instagram'></button>
            <button onClick={this.toYoutube.bind(this)} className='youtube' alt='youtube'></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;