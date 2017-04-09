import React, { Component } from 'react';

class ImgGrid extends Component {
  render() {
    return (
      <div className='img-grid' id='imgGrid'>
      	<h1>We are a team of creative individuals changing how the world sees food.</h1>
      	<div className='grid-container'>
          <div>
            <img src="tunasalad.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="beer.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="burger.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="seafood.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="pasta.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="breakfast.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="soup.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="pan.jpg" alt="food shot"/>
          </div>
      	</div>
        <h1>More from Instagram</h1>
        <div className='grid-container'>
          <div>
            <img src="shrimp.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="muscles.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="burito.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="lbeer.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="cocktail.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="burger2.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="chili.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="salmonsalad.jpg" alt="food shot"/>
          </div>
        </div>
        <h1>Our work has been viewed by hundreds of millions of people.</h1>
        <div className='grid-container'>
          <div>
            <img src="shrimp.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="muscles.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="burito.jpg" alt="food shot"/>
          </div>
          <div>
            <img src="lbeer.jpg" alt="food shot"/>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgGrid;