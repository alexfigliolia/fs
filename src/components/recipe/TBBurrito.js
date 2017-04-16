import React, { Component } from 'react';

class TBBurrito extends Component {
  render() {
    return (
      <div className='recipe' id='recipe'>
        <h1>Thanksgiving Breakfast Burrito</h1>
        <div className='vid-contain'>
          <iframe ref="frame0" src="https://www.youtube.com/embed/5Pk_iNGCNuA" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className='instructions'>
          <h2>Ingredients:</h2>
          <p>1 1/2 cups leftover turkey, chopped</p>
          <p>1 cup leftover mash potatoes</p>
          <p>1 cup leftover stuffing</p>
          <p>1 cup leftover roasted vegetables</p>
          <p>1/2 avocado sliced</p>
          <p>1/4 cup cranberry sauce</p>
          <p>3 eggs</p>
          <p>1 clove garlic</p>
          <p>3 tablespoons butter</p>
          <p>1 teaspoon smoked paprika</p>
          <p>1 teaspoon cumin</p>
          <p>1 teaspoon cayenne pepper</p>
        </div>
        <div className="make">
          <h2>Instructions:</h2>
          <p>1. Cut turkey into small cubes.</p>
          <p>2. Bring a medium saucepan to medium heat. Add one tablespoon of butter then add mashed potatoes. Sear on both until crisp. Set aside.</p>
          <p>3. Add two tablespoons of butter to a saucepan followed by minced garlic, paprika, cumin, and cayenne pepper. Add turkey and cook for 2-3 minutes. Now add stuffing, roasted vegetables and cook for another 1-2 minutes. Crack three eggs, scramble and mix everything together throughly until eggs are cooked.</p>
          <p>4. To build: Warm tortilla in a large saucepan or microwave. Start by adding the seared mash potatoes followed by egg and turkey mixture, sliced avocado, and cranberry sauce.</p>
          <p>5. Once you have all the fillings in place, pull the bottom half of the burrito over to meet the top half. Then, pull the tortilla back. Next, fold one side in and then the other side. With both ends folded, tightly roll your tortilla until you have a perfect, beautiful burrito.</p>
          <p>6. Keep tray in freezer until you are immediately ready to place discs on pancakes.</p>
        </div>
      </div>
    );
  }
}

export default TBBurrito;