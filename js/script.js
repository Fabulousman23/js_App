/* Create list of items */
let pokemonList = [
  { name: 'Onix',
    height: 8.8,
    types: ['petrified', 'crawling']
  },

  { name: 'Tauros',
    height: 1.4,
    types: ['horned', ' prancing']
  },

  { name: 'Pikachu',
    height: 0.4,
    types: ['electric', 'walking']
  }
];
console.log(pokemonList);


// loop iterates over each items
for (let i = 0; i < pokemonList.length; i++) {
  document.write(
    pokemonList[i].name + ' ' + '(height:' + ' ' + pokemonList[i].height + ')'
  )
};


// adding conditional to a loop
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 4) {
    console.log(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')'+ ' OMG! He\'s huge')
  } else if (pokemonList[i].height < 4 && pokemonList[i].height > 1) {
    console.log(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')')
  } else {
    console.log(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')'+ ' He\'s such a baby, so cute')
  }
};


