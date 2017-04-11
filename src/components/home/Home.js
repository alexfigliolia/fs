import React, { Component } from 'react';
import Banner from './Banner.js';
import Intro from './Intro.js';
import ImgGrid from './ImgGrid.js';

class Home extends Component {
  render() {
    return (
      <div className='home' id='home'>
        <Banner />
        <Intro nav={this.props.nav} />
        <ImgGrid />
      </div>
    );
  }
}

export default Home;