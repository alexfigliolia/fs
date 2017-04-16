import React, { Component } from 'react';

class BWBurrito extends Component {
  render() {
    return (
      <div className='recipe' id='recipe'>
        <h1>Bacon Wrapped Burrito</h1>
        <div className='vid-contain'>
          <iframe ref="frame0" src="https://www.youtube.com/embed/fgE4rBylIIQ" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className='instructions'>
          <h2>Ingredients:</h2>
          <p>10 strips bacon</p>
          <p>1/2 lb. skirt steak</p>
          <p>4 eggs</p>
          <p>1.5 cups frozen hashbrowns</p>
          <p>3/4 cup shredded cheddar cheese</p>
          <p>1 large flour totilla</p>
          <p>1 tablespoon garlic powder</p>
          <p>1 tablespoon butter</p>
          <p>salt and peper to taste</p>

          <h2>Guacamole:</h2>
          <p>2 large avocados, mashed</p>
          <p>2 tablespoons lime juice (approx.1 lime)</p>
          <p>1 jalapeno pepper, finely diced</p>
          <p>1 tomato, seeded and finely diced</p>
          <p>¼ cup red onion, finely diced</p>
          <p>2 tablespoons cilantro, chopped</p>
          <p>salt and pepper to taste</p>

          <h2>Salsa Ranchera:</h2>
          <p>1 tablespoon oil</p>
          <p>1 small white onion, diced</p>
          <p>2 cloves garlic, chopped</p>
          <p>2 serrano or jalapeno chilies, diced</p>
          <p>1 (15 oz) can diced fire roasted tomatoes</p>
          <p>2 tablespoons cilantro, chopped</p>
          <p>salt and pepper to taste</p>
          
        </div>
        <div className="make">
          <h2>Bacon Wrap Instructions:</h2>
          <p>1. Stretch and smooth out 8 slices of bacon next to each other, each just barely overlapping one another (enough slices wide enough for the burrito).</p>
          <p>2. Carefully roll the burrito up in the raw bacon.</p>
          <p>3. Flip around and use two more stretched and smoothed out slices of bacon to enclose the open sides.</p>
          <p>4. Heat a medium oiled skillet to medium high heat.</p>
          <p>5. Place bacon wrapped burrito seam side down onto hot skillet (idea here is to seal all of the ends of the bacon first so they do not come apart while searing).</p>
          <p>6. Rotate wrapped burrito on all sides in the pan to get a nice even crispy sear all around.</p>
          <p>7. Add guacamole, top with another fried egg and enjoy!</p>
          
          <h2>Instructions</h2>
          <p>1. For the Salsa: Heat the oil in a pan over medium heat. Add the onions and cook until tender, about 5-7 minutes. Add the garlic and chillies and cook until fragrant, about a minute. Add the tomatoes, bring to a boil, then reduce heat and simmer until the sauce thickens. Remove from heat, add salt and pepper to taste. Mix in cilantro at the end and set aside.</p>
          <p>2. For the Guacamole: Combine all ingredients in a small mixing bowl. Mix throughly until slightly chunky then set aside.</p>
          <p>3. For the Steak: Tenderize and season with salt, pepper, and garlic powder.</p>
          <p>4. Grill until desired doneness (3-4min each side for a medium) then let rest for 5 min prior to slicing.</p>
          <p>5. For the Eggs & Hash browns: In medium saute pan, add butter with frozen hash browns and cook until browned.</p>
          <p>6. Then, add 3 eggs and scramble followed by cheese and mix together.</p>
          <p>7. To Build: Heat up one large flour tortilla. Place down egg scramble followed by salsa and sliced steak. Fold burrito tight and carefully.</p>
          
        </div>
      </div>
    );
  }
}

export default BWBurrito;