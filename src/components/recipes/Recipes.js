import React, { Component } from 'react';
import RecipesBanner from './RecipesBanner.js';
import RecipesGrid from './RecipesGrid.js';

class Recipes extends Component {
  handleTabs(e){
    var meal = e.target.dataset.text.toLowerCase(),
        v = document.getElementsByClassName('video'),
        t = document.getElementsByClassName('tab'),
        m = document.getElementsByClassName(meal);
    for(var i = 0; i < 4; i++) {
      t[i].classList.remove('selected');
    }
    for(var j = 0; j < v.length; j++) {
      v[j].style.display = 'none';
    }
    for(var k = 0; k < m.length; k++) {
      m[k].style.display = 'block';
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
        <RecipesGrid nav={this.props.nav} />
      </div>
    );
  }
}

export default Recipes;