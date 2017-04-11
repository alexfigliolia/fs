import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className={this.props.classes} id='menu'>
        <div>
          <h2 data-page="Recipes" onClick={this.props.nav}>Recipes</h2>
          <h2>What We Do</h2>
          <h2>Clients</h2>
          <h2>Contact</h2>
          <div>
            <button className='facebook' alt='facebook'></button>
            <button className='twitter' alt='twitter'></button>
            <button className='instagram' alt='instagram'></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;