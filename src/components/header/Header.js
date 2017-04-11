import React, { Component } from 'react';
import Burger from './Burger.js';

class Header extends Component {
  render() {
    return (
      <header className="header" id='header'>
        <div>
          <h2 data-page='Recipes' onClick={this.props.nav}>Recipes</h2>
          <h2>What We Do</h2>
          <div id='logo' data-page='Home' onClick={this.props.nav}>
            <img src='fs.png' alt='logo' />
            <p>FOOD STEEZ</p>
          </div>
          <h2>Clients</h2>
          <h2>Contact</h2>
          <Burger classes={this.props.burgerStuff} burger={this.props.burger} />
        </div>
      </header>
    );
  }
}

export default Header;
