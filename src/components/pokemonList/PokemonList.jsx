import PropTypes from 'prop-types';
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




// PokemonList.propTypes = {
//   pokemons: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       pokemon: PropTypes.string.isRequired,
//       id: PropTypes.number.isRequired,
//       species_id: PropTypes.number.isRequired,
//       height: PropTypes.number.isRequired,
//       weight: PropTypes.number.isRequired,
//       base_experience: PropTypes.number.isRequired,
//       type_1: PropTypes.string.isRequired,
//       type_2: PropTypes.string.isRequired,
//       attack: PropTypes.number.isRequired,
//       defense: PropTypes.number.isRequired,
//       hp: PropTypes.number.isRequired,
//       special_attack: PropTypes.number.isRequired,
//       special_defense: PropTypes.number.isRequired,
//       speed: PropTypes.number.isRequired,
//       ability_1: PropTypes.string.isRequired,
//       ability_2: PropTypes.string.isRequired,
//       ability_hidden: PropTypes.string.isRequired,
//       color_1: PropTypes.string.isRequired,
//       color_2: PropTypes.string.isRequired,
//       color_f: PropTypes.string.isRequired,
//       egg_group_1: PropTypes.string.isRequired,
//       egg_group_2: PropTypes.string.isRequired,
//       url_image: PropTypes.string.isRequired,
//       generation_id:PropTypes.string,
//       evolves_from_species_id: PropTypes.string.isRequired,
//       evolution_chain_id: PropTypes.number.isRequired,
//       shape_id: PropTypes.string.isRequired,
//       shape: PropTypes.string.isRequired,
//       pokebase: PropTypes.string.isRequired,
//       pokedex: PropTypes.string.isRequired,
    
//     })
//   ).isRequired,
// };