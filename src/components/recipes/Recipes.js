import React, { Component } from 'react';
import RecipesBanner from './RecipesBanner.js';
import RecipesGrid from './RecipesGrid.js';

class Recipes extends Component {
  render() {
    return (
      <div className="recipes" id='recipes'>
        <RecipesBanner />
        <div className='scroll'>
        	<button></button>
        </div>
        <RecipesGrid />
      </div>
    );
  }
}

export default Recipes;