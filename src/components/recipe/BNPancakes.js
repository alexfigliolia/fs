import React, { Component } from 'react';

class BNPancakes extends Component {
  render() {
    return (
      <div className='recipe' id='recipe'>
        <h1>Bacon Nutella Stuffed Pancakes</h1>
        <div className='vid-contain'>
          <iframe ref="frame0" src="https://www.youtube.com/embed/vMNmBH3ngzA" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className='instructions'>
          <h2>Ingredients:</h2>
          <p>15 tbsp. Nutella</p>
          <p>5 slices of bacon</p>
          <p>Sliced strawberries</p>
          <p>Maple syrup</p>
          <p>2 tbsp. butter 1 egg</p>
          <p>1 c. + 3 tbsp. of milk</p>
          <p>1 tsp. vanilla extract</p>
          <p>1½ c.plain flour</p>
          <p>3 tsp. baking powder</p>
          <p>4 tbsp. sugar</p>
          <p>Pinch of salt</p>
        </div>
        <div className="make">
          <h2>Frozen Nutella Discs:</h2>
          <p>1. Line a baking tray with parchment paper.</p>
          <p>2. Cook bacon in a non-stick frying pan until crisp. Chop up into small pieces and set aside.</p>
          <p>3. Mix bacon bits and Nutella in a small bowl until throughly combined.</p>
          <p>4. Place approximately 2-3 tbsp of Nutella onto the baking tray and create discs around 6-7 cm in diameter. Discs should be about ½ cm thick. Be careful not to make them too thin or they will be prone to breaking apart. We advise to make extra just incase!</p>
          <p>5. Create as many discs as desired and place in freezer for a little over 1 hour.</p>
          <p>6. Keep tray in freezer until you are immediately ready to place discs on pancakes.</p>
          <h2>To Make the Pancakes:</h2>
          <p>1. Combine dry ingredients in a medium sized bowl and whisk, then add wet ingredients to center and whisk until lump free. Set aside.</p>
          <p>2. Heat a non-stick frying pan to medium and add ½ tsp. butter. Once butter is melted, wipe excess off with paper towel.</p>
          <p>3. Dollop ¼ c. of batter into frying pan and gently place frozen Nutella disc on top immediately after. Add additional batter to cover entire Nutella disc.</p>
          <p>4. Cooking time is approximately 2 minutes per side. When bubbles start to appear along the edges lift up edge to see if bottom is golden brown. Once golden brown, gently flip and cook until other side is golden brown. Repeat about 5-6 times until all remaining batter is used.</p>
          <p>5. Serve warm with maple syrup and sliced strawberries.</p>
        </div>
        <div className="scroll-up">
          <button onClick={this.props.scroll}></button>
        </div>
      </div>
    );
  }
}

export default BNPancakes;