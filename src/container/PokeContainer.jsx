import { useEffect, useState } from 'react';
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
    <h1>PokeContainer</h1>
  );
}


export default PokeContainer;