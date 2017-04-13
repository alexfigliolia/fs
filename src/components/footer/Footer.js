import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer" id='Footer'>
        <div>
          <div className='logo' data-page="Home" onClick={this.props.nav}>
            <img src='fs-white.png' alt='logo' data-page='Home' onClick={this.props.nav} />
            <p data-page='Home' onClick={this.props.nav}>FOOD STEEZ</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;