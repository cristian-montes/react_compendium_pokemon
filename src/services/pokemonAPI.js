
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

  return pokemonData.results;

};



const fetchPokemonAbilities = async () => {
  const pokemons = await fetch(`${URL}/abilities`);
  const pokemonData = await pokemons.json();

  // get random abilities
  const randomAbilities = pokemonData.map((pokemonAbility) => (pokemonAbility.ability)).sort(() => 0.5 - Math.random()).slice(0, 10);

  return randomAbilities;

};


//FILTERED
const fetchFilteredPokemon = async (ability) => {
  const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?ability=${ability}`);
  console.log('res', res);
  const data = await res.json();

 
  return data.results;
};




export { fetchPokemon, fetchPokemonBySearch, fetchPokemonAbilities, fetchFilteredPokemon };
