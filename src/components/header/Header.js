import React, { Component } from 'react';
import Burger from './Burger.js';

class Header extends Component {
  render() {
    return (
      <header className="header" id='header'>
        <div>
          <h2 data-page='Recipes' onClick={this.props.nav}>Recipes</h2>
          <h2 data-page='WhatWeDo' onClick={this.props.nav}>What We Do</h2>
          <div id='logo' data-page='Home' onClick={this.props.nav}>
            <img src='fs.png' alt='logo' data-page='Home' onClick={this.props.nav} />
            <p data-page='Home' onClick={this.props.nav}>FOOD STEEZ</p>
          </div>
          <h2 data-page="Clients" onClick={this.props.nav}>Clients</h2>
          <h2 data-page="Contact" onClick={this.props.nav}>Contact</h2>
          <Burger classes={this.props.burgerStuff} burger={this.props.burger} />
        </div>
      </header>
    );
  }
}

export default Header;
