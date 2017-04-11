import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer" id='Footer'>
        <div>
          <div className='logo' data-page="Home" onClick={this.props.nav}>
            <img src='fs.png' alt='logo' data-page='Home' onClick={this.props.nav} />
            <p data-page='Home' onClick={this.props.nav}>FOOD STEEZ</p>
          </div>
          <div className='flinks'>
            <h2 data-page="Recipes" onClick={this.props.nav}>RECIPES</h2>
            <h2 data-page="WhatWeDo" onClick={this.props.nav}>WHAT WE DO</h2>
            <h2>CLIENTS</h2>
            <h2>CONTACT US</h2>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;