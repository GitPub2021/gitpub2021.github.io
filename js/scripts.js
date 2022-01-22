

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


function addComment(height) {
  if(!isNaN(parseFloat(height)) && isFinite(parseFloat(height))){
  x = parseFloat(height)
  };
  if(x>5.6){
  return ' - Wow, that\'s huge!'
  } else {return ''};
}

function myLoopFunction(pokemon) {
  document.write('<p>' + pokemon.pokemonName + ' (height: ' + pokemon.height + ')' + addComment(pokemon.height) + '</p>');
}

pokemonList.forEach(myLoopFunction);
