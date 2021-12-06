import { useEffect, useState } from 'react';
import Controls from '../components/Controls/Controls';
import { PokemonList } from '../components/pokemonList/PokemonList';
import { fetchFilteredPokemon, fetchPokemon, fetchPokemonAbilities, fetchPokemonBySearch, fetchSortedPokemon } from '../services/pokemonAPI';


function PokeContainer(){
  const [pokemons, setPokemons] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [searchName, setSearchName] = useState('');
  const [abilities, setAbilities] = useState([]);
  const [selectedAbility, setSelectedAbility] = useState('all');
  const [sorted, setSorted] = useState('desc');
  
  useEffect(() => {
    const pokemonData = async () => {
      const data = await fetchPokemon();
      setPokemons(data);
      setIsLoading(false);
    };

    pokemonData();
  }, []);

  //HANDLE SUBMIT
  const handleSubmit = async (event) =>{
    event.preventDefault();    
    setIsLoading(true);

    const pokemonData = await fetchPokemonBySearch(searchName);
    setPokemons(pokemonData);
   
    setIsLoading(false);
    setSearchName('');
  };

  //SORT POKEMONS
  const handleSort = async (event) => {
    setIsLoading(true);
    setSorted(event.target.value);
    const sortedPokes = await fetchSortedPokemon(sorted);
    await setPokemons(sortedPokes);
    // setSorted('');
    setIsLoading(false);
  };  


//FETCH ABILITIES
  useEffect(() => {
    const abily = async () => {
      const fetchedAbilities = await fetchPokemonAbilities();
      setAbilities(fetchedAbilities);
    };
    
    abily();

  }, []);


  //FILTERED POKEMON
  useEffect(()=> {
    async function capturedFilteredPokemon(){
      if (!selectedAbility) return;
      setIsLoading(true);

      if (selectedAbility !== 'all'){
        const filteredPokemon = await fetchFilteredPokemon(selectedAbility);
       
        setPokemons(filteredPokemon);
      }
      setIsLoading(false);
    }
    capturedFilteredPokemon();
  }, [selectedAbility]);




  return (
    <main>
      <Controls
        searchName= {searchName}
        setSearchName = {setSearchName}
        handleSubmit={handleSubmit}
        abilities={abilities}
        setSelectedAbility={setSelectedAbility}
        selectedAbility={selectedAbility}
        sorted={sorted}
        setSorted={setSorted}
        handleSort={handleSort}
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