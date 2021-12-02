
const URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

const fetchPokemon = async () => {
  const pokemonList = await fetch(URL);
  const pokemonListData = await pokemonList.json();
  
//   console.log('POKEDATA', pokemonListData.results);
  return pokemonListData.results;

};

export { fetchPokemon };