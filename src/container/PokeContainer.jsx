import { useEffect, useState } from 'react';
import Controls from '../components/Controls/Controls';
import { PokemonList } from '../components/pokemonList/PokemonList';
import { fetchPokemon, fetchPokemonAbilities, fetchPokemonBySearch } from '../services/pokemonAPI';


function PokeContainer(){
  const [pokemons, setPokemons] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [searchName, setSearchName] = useState('');
  const [types, setTypes] = useState([]);
  

  useEffect(() => {
    const pokemonData = async () => {
      const data = await fetchPokemon();
      setPokemons(data);

      const abilities = await fetchPokemonAbilities();
      console.log(abilities);

      setIsLoading(false);
    };

    pokemonData();
  }, []);


  const handleSubmit = async (event) =>{
    event.preventDefault();    
    setIsLoading(true);

    const pokemonData = await fetchPokemonBySearch(searchName);
    setPokemons(pokemonData);
   
    setIsLoading(false);
    setSearchName('');
  };

  useEffect(() => {
    const typos = async () => {
      const fetchedTypes = await fetchPokemonAbilities();
      setTypes(fetchedTypes);
    };
    typos();
  }, []);




  return (
    <main>
      <Controls
        searchName= {searchName}
        setSearchName = {setSearchName}
        handleSubmit={handleSubmit}
      />
      <div>
        {isloading ? (<h1> Loading Pokemons!!!!</h1>)
          : (
            <PokemonList pokemons={pokemons}/>

          )}
      </div>
    </main>
  );
}


export default PokeContainer;