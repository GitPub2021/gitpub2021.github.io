




/* Function to fetch pokemons from pokemon api */

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  function getAll(){

    if(pokemonList.length > 0)
    return pokemonList;
  };

  function add(item){
    pokemonList.push(item);
  };

  /* Define Function that does create for each pokemon object a button nested in a list item */

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  };

  /* Function that takes pokemon object, parses the url and loads the details of the pokemon */

  function loadDetails(pokemon) {
    let url2 = pokemon.detailsUrl;
    return fetch(url2).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  };

  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();






/* function that outputs pokemon objects into the console */

function showDetails(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
};

/* function that creates elements for each pokemon object that it uses as inputs */

function addListItem(pokemon){
  /* document.write('<p>' + pokemon.pokemonName + ' (height: ' + pokemon.height + ')' + addComment(pokemon.height) + '</p>'); */
  let parentalelement = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.classList.add('pokemon-button');
  button.innerText = pokemon.name;
  listItem.appendChild(button);
  parentalelement.appendChild(listItem);
  button.addEventListener('click', function (event) {
    showDetails(pokemon);
  });
};

/* old pokemonRepository Function
let pokemonRepository = (function () {
let pokemonList = []; // empty array

return {
  add: function(pokemon) {
    pokemonList.push(pokemon);
  },
  getAll: function() {
    return pokemonList;
  }
};
})();
*/


/* Execute addListItem to loop through the pokemon objects and create a new button for each of them */
pokemonRepository.loadList().then(function (){
  pokemonRepository.getAll().forEach(addListItem);
}).catch(function () {
  console.log('Pokemon API is not responding');
});

/*
pokemonRepository.getAll().forEach(addListItem);
*/
