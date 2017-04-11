import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div className={this.props.classes} id='loader'>
        <div data-page='Home' onClick={this.props.nav}>
          <img src='fs.png' alt='logo' />
          <p>FOOD STEEZ</p>
        </div>
      </div>
    );
  }
}

export default Loader;