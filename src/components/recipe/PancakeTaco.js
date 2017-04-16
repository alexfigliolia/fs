import React, { Component } from 'react';

class PancakeTaco extends Component {
  render() {
    return (
      <div className='recipe' id='recipe'>
        <h1>Pancake Taco</h1>
        <div className='vid-contain'>
          <iframe ref="frame0" src="https://www.youtube.com/embed/UC0AcId295Q" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className='instructions'>
          <h2>Ingredients:</h2>
          <p>1½ cups all-purpose flour</p>
          <p>5 teaspoons baking powder</p>
          <p>3 tablespoons sugar</p>
          <p>1 teaspoon kosher salt</p>
          <p>1½ cups milk</p>
          <p>2 large eggs, room temperature</p>
          <p>3 tablespoons oil or melted butter</p>
          <p>1 teaspoon vanilla extract</p>
          <p>12 slices of bacon</p>
          <p>6 eggs</p>
          <p>6 slices of cheese</p>
          <p>salt and pepper</p>
          <p>Maple syrup</p>
        </div>
        <div className="make">
          <h2>Instructions</h2>
          <p>1. Preheat oven to 200 degrees or ‘warm’ setting. Heat a griddle or pan on medium.</p>
          <p>2. In a bowl, add all dry ingredients for pancakes together. In a separate bowl, mix together wet ingredients.</p>
          <p>3. Add wet and dry ingredients together. Do not over mix as lots of lumps are best.</p>
          <p>4. Lightly grease the griddle or pan with butter or oil. Pour ½ cup of the batter onto the griddle. Cook until the top starts to bubble a lot.</p>
          <p>5. Flip. Cook for another 1 - 2 minutes, until golden brown.</p>
          <p>6. Leave finished pancakes in the oven to stay warm.</p>
          <p>7. Cook the bacon. Place in oven to keep warm.</p>
          <p>8. Fry your eggs. Season with salt and pepper.</p>
          <p>9. Add a slice of cheese to the inside of your pancakes, then add the bacon and eggs.</p>
        </div>
      </div>
    );
  }
}

export default PancakeTaco;