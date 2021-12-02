import Pokemon from '../pokemon/Pokemon';

export function PokemonList({ pokemons }){
  return (
    <ul aria-label='pokemonList'>
      { pokemons.map((pokemon) => {
        return (
          <li key={pokemon.id}>
            <Pokemon poke={pokemon}/>
          </li>
        );
      })}
    </ul>
  );
}