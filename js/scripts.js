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

/* Define IIFE for adding to and accessing of the pokemonList */

let pokemonRepository = (function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

/* Add the 3 Pokemon Objects to the IIFE pokemonList */

pokemonRepository.add(pokemon1);
pokemonRepository.add(pokemon2);
pokemonRepository.add(pokemon3);


/* Loop through the created Pokemons and show their names and heights
add <p> elements to have better display with line breaks ;
check also if height bigger 5.6 and show comment */


/* Beforehand: Create a function to show Height Comment if height exceeds 5.6 feet height */

function addComment(height) {
  if(!isNaN(parseFloat(height)) && isFinite(parseFloat(height))){
  x = parseFloat(height)
  };
  if(x>5.6){
  return ' - Wow, that\'s huge!'
  } else {return ''};
};

/* function that outputs pokemon objects into the console */
function showDetails(pokemon) {
  console.log(pokemon);
}

/* Define Function that does create for each pokemon object a button nested in a list item */

function addListItem(pokemon) {
  /* document.write('<p>' + pokemon.pokemonName + ' (height: ' + pokemon.height + ')' + addComment(pokemon.height) + '</p>'); */
  let parentalelement = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.classList.add('pokemon-button');
  button.innerText = pokemon.pokemonName;
  listItem.appendChild(button);
  parentalelement.appendChild(listItem);
  button.addEventListener('click', function (event) {
    showDetails(pokemon);
  });
};


/* Execute addListItem to loop through the pokemon objects and create a new button for each of them */

pokemonRepository.getAll().forEach(addListItem);
