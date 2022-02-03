
/* Execute addListItem to loop through the pokemon objects and create a new button for each of them */
pokemonRepository.loadList();
pokemonRepository.getAll().forEach(addListItem);
