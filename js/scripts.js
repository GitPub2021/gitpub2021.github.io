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

/* Check out if the code works, not needed for actual program thus commented out
console.log(pokemonList) ;
*/
