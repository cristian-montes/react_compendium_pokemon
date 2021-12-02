import { useEffect, useState } from 'react';
import { PokemonList } from '../components/pokemonList/PokemonList';
import { fetchPokemon } from '../services/pokemonAPI';


function PokeContainer(){
  const [pokemons, setPokemons] = useState([]);
    

  useEffect(() => {
    const pokemonData = async () => {
      const data = await fetchPokemon();
      setPokemons(data);
    };

    pokemonData();
  }, []);

  return (
    <PokemonList pokemons={pokemons}/>
  );
}


export default PokeContainer;