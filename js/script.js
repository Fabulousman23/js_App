/* Create list of items */
   let pokemonProject = (function () {
   let pokemonList = [
    { name: 'Onix',
      height: 8.8,
      types: ['petrified', ' crawling']
    },

    { name: 'Tauros',
      height: 1.4,
      types: ['horned', ' prancing']
    },

    { name: 'Pikachu',
      height: 0.4,
      types: ['electric', ' walking']
    }
  ];

  function getAll() {
    return pokemonList;
  }

  function add (pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
  };

  })();

  console.log(pokemonProject.getAll());
  
  pokemonProject.getAll().forEach(function(pokemon) {
    document.write('<p class="pokedex-style">' + pokemon.name + '<br>' + 'Height: ' + pokemon.height + 'm<br>' + 'Types: ' + pokemon.types + '</p>');
});





// //  loop iterates using forEach()
// pokemonList.forEach(function(pokemon) {
//   console.log(pokemon.name + ' is ' + pokemon.height + ' '+ pokemon.types);
// });



// // loop iterates over each items

// function printPokemon(list){
// for (let i = 0; i < list.length; i++) {
//   document.write(
//    '<p>' + pokemonList[i].name + ' ' + '(height:' + ' ' + pokemonList[i].height + ')<br>'+ '</p>'
//   )
//   };
// };

// printPokemon(pokemonList);

// // adding conditional to a loop
// let addText = ' (height: ';
// for (let i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height > 4) {
//     console.log(pokemonList[i].name + addText + pokemonList[i].height + ')'+ ' OMG! He\'s huge')
//   } else if (pokemonList[i].height < 4 && pokemonList[i].height > 1) {
//     console.log(pokemonList[i].name + addText + pokemonList[i].height + ')')
//   } else {
//     console.log(pokemonList[i].name + addText + pokemonList[i].height + ')'+ ' He\'s such a baby, so cute')
//   }
// };



