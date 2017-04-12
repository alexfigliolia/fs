import React, { Component } from 'react';

class RecipesBanner extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		"path" : "desert.jpeg"
  	}
  }
  componentDidMount(){
  	if(this.state.path !== "loaded") {
  		this.refs.img.src = this.state.path;
  		this.setState({
  			"path" : "loaded"
  		});
  	}
  }
  render() {
    return (
      <div className="recipes-banner" id='recipesBanner'>
      	<img ref="img" alt='banner' />
      	<h1>//Recipes</h1>
      </div>
    );
  }
}

export default RecipesBanner;