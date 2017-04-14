import React, { Component } from 'react';

class Recipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      "recipe" : [
        ["Bacon Wrapped Burrito",
          ["Ingredients:", "Guacamole:", "Salsa Ranchera:"],
            ["Bacon Wrap Instructions:" , "Instructions:"],
              ["10 strips bacon", "1/2 lb. skirt steak", 
                "4 eggs", "1.5 cups frozen hashbrowns", 
                "3/4 cup shredded cheddar cheese", "1 large flour totilla", 
                "1 tablespoon garlic powder", "1 tablespoon butter", 
                "salt and peper to taste"
              ],
              ["2 large avocados, mashed", "2 tablespoons lime juice (approx.1 lime)",
                "1 jalapeno pepper, finely diced", "1 tomato, seeded and finely diced",
                "¼ cup red onion, finely diced", "2 tablespoons cilantro, chopped",
                "salt and pepper to taste"
              ],
              ["1 tablespoon oil", "1 small white onion, diced", "2 cloves garlic, chopped",
                "2 serrano or jalapeno chilies, diced", "1 (15 oz) can diced fire roasted tomatoes",
                "2 tablespoons cilantro, chopped", "salt and pepper to taste"
              ],
              ["1. Stretch and smooth out 8 slices of bacon next to each other, each just barely overlapping one another (enough slices wide enough for the burrito).",
                "2. Carefully roll the burrito up in the raw bacon.",
                "3. Flip around and use two more stretched and smoothed out slices of bacon to enclose the open sides.",
                "4. Heat a medium oiled skillet to medium high heat.",
                "5. Place bacon wrapped burrito seam side down onto hot skillet (idea here is to seal all of the ends of the bacon first so they do not come apart while searing).",
                "6. Rotate wrapped burrito on all sides in the pan to get a nice even crispy sear all around.",
                "7. Add guacamole, top with another fried egg and enjoy!"
              ],
              ["1. For the Salsa: Heat the oil in a pan over medium heat. Add the onions and cook until tender, about 5-7 minutes. Add the garlic and chillies and cook until fragrant, about a minute. Add the tomatoes, bring to a boil, then reduce heat and simmer until the sauce thickens.Remove from heat, add salt and pepper to taste. Mix in cilantro at the end and set aside.",
                "2. For the Guacamole: Combine all ingredients in a small mixing bowl. Mix throughly until slightly chunky then set aside.",
                "3. For the Steak: Tenderize and season with salt, pepper, and garlic powder.",
                "4. Grill until desired doneness (3-4min each side for a medium) then let rest for 5 min prior to slicing.",
                "5. For the Eggs & Hash browns: In medium saute pan, add butter with frozen hash browns and cook until browned.",
                "6. Then, add 3 eggs and scramble followed by cheese and mix together.",
                "7. To Build: Heat up one large flour tortilla. Place down egg scramble followed by salsa and sliced steak. Fold burrito tight and carefully."
              ]
        ]

      ]
    }
  }
  componentDidMount(){
    console.log(this.state.recipe);
  }
  render() {
    return (
      <div className='recipe' id='recipe'>
        <h1>{this.state.recipe[0][0]}</h1>
        <div className='vid-contain'>
          <iframe ref="frame0" src="https://www.youtube.com/embed/fgE4rBylIIQ" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className='instructions'>
          <h2>{this.state.recipe[0][1][0]}</h2>

          <p>{this.state.recipe[0][3][0]}</p>
          <p>{this.state.recipe[0][3][1]}</p>
          <p>{this.state.recipe[0][3][2]}</p>
          <p>{this.state.recipe[0][3][3]}</p>
          <p>{this.state.recipe[0][3][4]}</p>
          <p>{this.state.recipe[0][3][5]}</p>
          <p>{this.state.recipe[0][3][6]}</p>
          <p>{this.state.recipe[0][3][7]}</p>
          <p>{this.state.recipe[0][3][8]}</p>

          <h2>{this.state.recipe[0][1][1]}</h2>

          <p>{this.state.recipe[0][4][0]}</p>
          <p>{this.state.recipe[0][4][1]}</p>
          <p>{this.state.recipe[0][4][2]}</p>
          <p>{this.state.recipe[0][4][3]}</p>
          <p>{this.state.recipe[0][4][4]}</p>
          <p>{this.state.recipe[0][4][5]}</p>
          <p>{this.state.recipe[0][4][6]}</p>

          <h2>{this.state.recipe[0][1][2]}</h2>

          <p>{this.state.recipe[0][5][0]}</p>
          <p>{this.state.recipe[0][5][1]}</p>
          <p>{this.state.recipe[0][5][2]}</p>
          <p>{this.state.recipe[0][5][3]}</p>
          <p>{this.state.recipe[0][5][4]}</p>
          <p>{this.state.recipe[0][4][5]}</p>
          <p>{this.state.recipe[0][4][6]}</p>
          <p>{this.state.recipe[0][4][5]}</p>
          <p>{this.state.recipe[0][4][6]}</p>
        </div>
        <div className="make">
          <h2>{this.state.recipe[0][2][0]}</h2>

          <p>{this.state.recipe[0][6][0]}</p>
          <p>{this.state.recipe[0][6][1]}</p>
          <p>{this.state.recipe[0][6][2]}</p>
          <p>{this.state.recipe[0][6][3]}</p>
          <p>{this.state.recipe[0][6][4]}</p>
          <p>{this.state.recipe[0][6][5]}</p>
          <p>{this.state.recipe[0][6][6]}</p>
          <p>{this.state.recipe[0][6][5]}</p>
          <p>{this.state.recipe[0][6][6]}</p>

          <h2>{this.state.recipe[0][2][1]}</h2>

          <p>{this.state.recipe[0][7][0]}</p>
          <p>{this.state.recipe[0][7][1]}</p>
          <p>{this.state.recipe[0][7][2]}</p>
          <p>{this.state.recipe[0][7][3]}</p>
          <p>{this.state.recipe[0][7][4]}</p>
          <p>{this.state.recipe[0][7][5]}</p>
          <p>{this.state.recipe[0][7][6]}</p>
          <p>{this.state.recipe[0][7][5]}</p>
          <p>{this.state.recipe[0][7][6]}</p>

        </div>
        <div className="scroll-up">
          <button onClick={this.props.scroll}></button>
        </div>
      </div>
    );
  }
}

export default Recipe;

        // ["Pancake Taco",
        // ["Thanksgiving Breakfast Burrito",
        // ["Bacon-Nutella Pancakes",
        // ["Sunday BBQ Recipes",
        // ["Cheetos Crusted Moz Sticks",
        // ["French Onion Grilled Cheese",
        // ["Thanksgiving Grilled Cheese",
        // ["Taco Pizza",
        // ["Bacon Wrapped, Cheese Stuffed Burger",
        // ["Strawberry Crisp",
        // ["Red Velvet Crepes",
        // ["No-Bake Truffles",
        // ["Cold Brew Creme Brulee"