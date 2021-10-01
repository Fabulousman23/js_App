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
    pokemonList[i].name + " " + "(height:" + " " + pokemonList[i].height + ")"
  );
}

