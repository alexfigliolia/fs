import React, { Component } from 'react';
import RecipesBanner from './RecipesBanner.js';
import RecipesGrid from './RecipesGrid.js';

class Recipes extends Component {
  handleTabs(e){
    var t = document.getElementsByClassName('tab');
    for(var i = 0; i < 4; i++) {
      t[i].classList.remove('selected');
    }
    e.target.classList.add('selected');
  }
  render() {
    return (
      <div className="recipes" id='recipes'>
        <RecipesBanner />
        <div className='scroll'>
        	<button id="rc" onClick={this.props.scroll}></button>
        </div>
        <div className='tabs'>
          <button onClick={this.handleTabs.bind(this)} className="tab selected" data-text="Breakfast"></button>
          <button onClick={this.handleTabs.bind(this)} className="tab" data-text="Lunch"></button>
          <button onClick={this.handleTabs.bind(this)} className="tab" data-text="Dinner"></button>
          <button onClick={this.handleTabs.bind(this)} className="tab" data-text="Sweets"></button>
        </div>
        <RecipesGrid />
      </div>
    );
  }
}

export default Recipes;