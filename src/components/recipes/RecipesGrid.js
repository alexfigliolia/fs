import React, { Component } from 'react';

class RecipesGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "paths" : [
          "https://www.youtube.com/embed/fgE4rBylIIQ",
          "https://www.youtube.com/embed/UC0AcId295Q",
          "https://www.youtube.com/embed/5Pk_iNGCNuA",
          "https://www.youtube.com/embed/vMNmBH3ngzA",
          "https://www.youtube.com/embed/zfmaBQ4zolY",
          "https://www.youtube.com/embed/p66drEWI0ik",
          "https://www.youtube.com/embed/vu2eJPbDylg",
          "https://www.youtube.com/embed/buVdqKh80Wg",
          "https://www.youtube.com/embed/B87cx_c08is",
          "https://www.youtube.com/embed/bxtwl6DntaA",
          "https://www.youtube.com/embed/YbvRhfWDyYI",
          "https://www.youtube.com/embed/6gH1N_5U1cM",
          "https://www.youtube.com/embed/fYKiz5vWAFE",
          "https://www.youtube.com/embed/NvxjJkf6ljA"
      ]
    }     
  }
  componentDidMount(){
    if(this.state.paths.length > 13) {
      var i = 0;
      for(var ref in this.refs) {
        this.refs[ref].src = this.state.paths[i];
        i++;
      }
      this.setState({
        "paths" : ["loaded"]
      });
    }
  }
  render() {
    return (
      <div className="recipes-grid" id='recipesGrid'>
      	<div className="video-grid">
      	  <div className="video breakfast">
      	  	<h2>Bacon Wrapped Burrito</h2>
      	  	<iframe ref="frame0" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video breakfast">
      	  	<h2>Pancake Taco</h2>
      	  	<iframe ref="frame1" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video breakfast">
      	  	<h2>Thanksgiving Breakfast Burrito</h2>
      	  	<iframe ref="frame2" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video breakfast">
      	  	<h2>Bacon-Nutella Pancakes</h2>
      	  	<iframe ref="frame3" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	</div>
      	<div className="video-grid">
      	  <div className="video lunch">
      	  	<h2>Sunday bbq Recipes</h2>
      	  	<iframe ref="frame4" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video lunch">
      	  	<h2>Cheetos Crusted Moz Sticks</h2>
      	  	<iframe ref="frame5" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video lunch">
      	  	<h2>French Onion Grilled Cheese</h2>
      	  	<iframe ref="frame6" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video lunch">
      	  	<h2>Thanksgiving Grilled Cheese</h2>
      	  	<iframe ref="frame7" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	</div>
      	<div className="video-grid">
      	  <div className="video dinner">
      	  	<h2>Taco Pizza</h2>
      	  	<iframe ref="frame8" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video dinner">
      	  	<h2>Bacon Wrapped, Cheese Stuffed Burger</h2>
      	  	<iframe ref="frame9" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	</div>
      	<div className="video-grid">
      	  <div className="video sweets">
      	  	<h2>Strawberry Crisp</h2>
      	  	<iframe ref="frame10" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video sweets">
      	  	<h2>Red Velvet Crepes</h2>
      	  	<iframe ref="frame11" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video sweets">
      	  	<h2>No-Bake Truffles</h2>
      	  	<iframe ref="frame12" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	  <div className="video sweets">
      	  	<h2>Cold Brew Creme Brulee</h2>
      	  	<iframe ref="frame13" frameBorder="0" allowFullScreen></iframe>
      	  </div>
      	</div>
      </div>
    );
  }
}

export default RecipesGrid;