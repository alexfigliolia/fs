import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer" id='Footer'>
        <div>
          <div className='logo'>
            <img src='fs.png' alt='logo' />
            <p>FOOD STEEZ</p>
          </div>
          <div className='flinks'>
            <h2>RECIPES</h2>
            <h2>WHAT WE DO</h2>
            <h2>CLIENTS</h2>
            <h2>CONTACT US</h2>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;