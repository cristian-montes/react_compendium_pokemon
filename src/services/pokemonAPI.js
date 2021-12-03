
const URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

const fetchPokemon = async () => {
  const pokemonList = await fetch(URL);
  const pokemonListData = await pokemonList.json();
  
//   console.log('POKEDATA', pokemonListData.results);
  return pokemonListData.results;

};

const fetchPokemonBySearch = async (pokemonName) => {
  const nameToLowerCase = pokemonName.toLowerCase();

  const pokemons = await fetch(`${URL}?pokemon=${nameToLowerCase}`);
  const pokemonData = await pokemons.json();

  console.log(pokemonData);
  return pokemonData.results;

};



export { fetchPokemon, fetchPokemonBySearch };