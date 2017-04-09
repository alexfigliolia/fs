import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header" id='header'>
        <div>
          <h2>Recipes</h2>
          <h2>What We Do</h2>
          <div id='logo'>
            <img src='fs.png' alt='logo' />
            <p>FOOD STEEZ</p>
          </div>
          <h2>Clients</h2>
          <h2>Contact</h2>
        </div>
      </header>
    );
  }
}

export default Header;
