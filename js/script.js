/* Create list of items */
let pokemonProject = (function () {
  let pokemonList = [
    { name: "Onix", height: 8.8, types: ["petrified", " crawling"] },

    { name: "Tauros", height: 1.4, types: ["horned", " prancing"] },

    { name: "Pikachu", height: 0.4, types: ["electric", " walking"] },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types in pokemon"
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("Hey, It's not an object!");
    }
  }
  function addListItem(pokemon) {
   let pokemonList = document.querySelector('.pokemon-list');
   let listItem = document.createElement('li');
   let button = document.createElement('button');
   button.classList.add('button-class');
   button.innerText = pokemon.name;
   listItem.appendChild(button);
   pokemonList.appendChild(listItem);
  }
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

console.log(pokemonProject.getAll());
pokemonProject.add({name: 'Charmander', height: 2, types: ['fire']});

console.log(pokemonProject.getAll());



pokemonProject.getAll().forEach(function(pokemon) {
 pokemonProject.addListItem(pokemon)
 });




