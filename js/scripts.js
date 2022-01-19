/* Define empty array for Pokemons */
pokemonList = [] ;


/* Create 3 Pokemon Objects as JavaScript Objects, here I am using Mario Kart Values as I dont know Pokemons;
Each Object must be created a new and cannot be copied because of the difference
between JavaScript Objects and StandardJavaScript Variables */

pokemon1 = {
  pokemonName : 'Luigi',
  height: 5.9,
  pokemonType: ['slim','green']
} ;

pokemon2 = {
  pokemonName : 'Mario',
  height: 5.6,
  pokemonType: ['short','red']
} ;

pokemon3 = {
  pokemonName : 'Toad',
  height: 5.2,
  pokemonType: ['small','yellow']
} ;


/* Push one Object after the other into the array of Pokemons */

pokemonList.push(pokemon1);
pokemonList.push(pokemon2);
pokemonList.push(pokemon3);

;

/* Loop through the created Pokemons and show their names and heights
add <p> elements to have better display with line breaks ;
check also if height bigger 5.6 and show comment */

for(let i = 0;i<=(pokemonList.length -1);i++) {
  x = pokemonList[i].pokemonName;
  y = pokemonList[i].height;
  heightComment = '';
  if(y>5.6) {heightComment = ' - Wow, that is huge for an Italian!'};
  z = '<p>' + x + ' (height: ' + y + ') ' + heightComment + '</p>';
  document.write(z);
};
