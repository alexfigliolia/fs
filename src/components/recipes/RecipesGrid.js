import React, { Component } from 'react';

class RecipesGrid extends Component {
  render() {
    return (
      <div className="recipes-grid" id='recipesGrid'>
      	<h1>Breakfast</h1>
      	<div className="video-grid">
      	  <div className="video">
      	  	<h2>Bacon Wrapped Burrito</h2>
      	  	<iframe src="https://www.youtube.com/embed/fgE4rBylIIQ" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video">
      	  	<h2>Pancake Taco</h2>
      	  	<iframe src="https://www.youtube.com/embed/UC0AcId295Q" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video">
      	  	<h2>Thanksgiving Breakfast Burrito</h2>
      	  	<iframe src="https://www.youtube.com/embed/5Pk_iNGCNuA" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video">
      	  	<h2>Bacon-Nutella Pancakes</h2>
      	  	<iframe src="https://www.youtube.com/embed/vMNmBH3ngzA" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	</div>
      	<h1>Lunch</h1>
      	<div className="video-grid">
      	  <div className="video">
      	  	<h2>Sunday bbq Recipes</h2>
      	  	<iframe src="https://www.youtube.com/embed/zfmaBQ4zolY" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video">
      	  	<h2>Cheetos Crusted Moz Sticks</h2>
      	  	<iframe src="https://www.youtube.com/embed/p66drEWI0ik" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video">
      	  	<h2>French Onion Grilled Cheese</h2>
      	  	<iframe src="https://www.youtube.com/embed/vu2eJPbDylg" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video">
      	  	<h2>Thanksgiving Grilled Cheese</h2>
      	  	<iframe src="https://www.youtube.com/embed/buVdqKh80Wg" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	</div>
      	<h1>Dinner</h1>
      	<div className="video-grid">
      	  <div className="video">
      	  	<h2>Taco Pizza</h2>
      	  	<iframe src="https://www.youtube.com/embed/B87cx_c08is" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video">
      	  	<h2>Bacon Wrapped, Cheese Stuffed Burger</h2>
      	  	<iframe src="https://www.youtube.com/embed/bxtwl6DntaA" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	</div>
      	<h1>Sweets</h1>
      	<div className="video-grid">
      	  <div className="video">
      	  	<h2>Strawberry Crisp</h2>
      	  	<iframe src="https://www.youtube.com/embed/YbvRhfWDyYI" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video">
      	  	<h2>Red Velvet Crepes</h2>
      	  	<iframe src="https://www.youtube.com/embed/6gH1N_5U1cM" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video">
      	  	<h2>No-Bake Truffles</h2>
      	  	<iframe src="https://www.youtube.com/embed/fYKiz5vWAFE" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video">
      	  	<h2>Cold Brew Creme Brulee</h2>
      	  	<iframe src="https://www.youtube.com/embed/NvxjJkf6ljA" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	</div>
      </div>
    );
  }
}

export default RecipesGrid;