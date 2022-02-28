//Start of IIFE Function
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//add new pokemon to the LIst of Pokemons
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
//return all pokemons here
  function getAll() {
    return pokemonList;
  }

//create a button for each Pokemon
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
  })
}
  //load list of pokemons from API
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
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
//load data of each pokemon upon a click on a pokemon
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Add the details of each item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }
//Load Pokemon Data From Server
    function showDetails(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        console.log(pokemon);
        showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
      });
    }

    //Show modal of pokemon details
    function showModal(name, height, image){
      console.log(`show modal function called`);// just for test
      let modalContainer = document.querySelector('#modal-container');
      console.log(`modalContainer: ${modalContainer}`);
      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');

      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);

      let titleElement = document.createElement('h1');
      titleElement.innerText = name;

      let contentElement = document.createElement('p');
      contentElement.innerText = "Height:" + height;
      //render an image for each pokemon
      let imageElement = document.createElement('img');
      imageElement.classList.add('pokemon-image-class');
      imageElement.src = image;

      console.log(`imageElement.className is: ${imageElement.className}`);

      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modal.appendChild(imageElement);
      modalContainer.appendChild(modal);
      modalContainer.classList.add('is-visible');
    }

    function hideModal(){
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.remove('is-visible');
    }

    let modalContainer = document.querySelector('#modal-container');
    window.addEventListener('keydown', (e) =>{
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    modalContainer.addEventListener('click', (e) =>{
      let target = e.target;
      if (target ===modalContainer){
        hideModal();
      }
    });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();//end of IIFE part

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
