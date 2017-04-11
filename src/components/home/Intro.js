import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div className='intro' id='intro'>
      	<h1>Let our storytelling fuel your hunger.</h1>
      	<div className='intro-container'>
      		<img src='cooking.jpeg' alt='guy cooking' />
      		<div className='intro-text' id='introText'>
	      		<h3>//WHAT WE DO</h3>
	      		<h2>WORKING WITH THE BEST OF THE BEST.</h2>
	      		<p>We work with top restaurants, chefs, luxury cookware brands, food products and digital media companies on culinary and lifestyle projects.</p>
	      		<button data-page='WhatWeDo' onClick={this.props.nav}>LEARN MORE</button>
	      	</div>
      	</div>
      </div>
    );
  }
}

export default Intro;