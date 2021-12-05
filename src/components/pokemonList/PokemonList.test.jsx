import { render, screen } from '@testing-library/react';
import { PokemonList } from './PokemonList';

it('should render PokeList component', ()=> {
  render(
    <PokemonList
      pokemons={[
        {
          _id: '5ff4fb7cd89993a89cc65444',
          pokemon: 'venusaur-mega',
          id: 4,
          species_id: 3,
          height: 24,
          weight: 1555,
          base_experience: 281,
          type_1: 'grass',
          type_2: 'poison',
          attack: 100,
          defense: 123,
          hp: 80,
          special_attack: 122,
          special_defense: 120,
          speed: 80,
          ability_1: 'thick-fat',
          ability_2: 'NA',
          ability_hidden: 'NA',
          color_1: '#78C850',
          color_2: '#A040A0',
          color_f: '#81A763',
          egg_group_1: 'monster',
          egg_group_2: 'plant',
          url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png',
          generation_id: 'NA',
          evolves_from_species_id: 'NA',
          evolution_chain_id: 'NA',
          shape_id: 'NA',
          shape: 'NA',
          pokebase: 'venusaur',
          pokedex: 'http://www.pokemon.com/us/pokedex/venusaur'
        },
        {
          _id: '5ff4fb7cd89993a89cc6544f',
          pokemon: 'butterfree',
          id: 16,
          species_id: 12,
          height: 11,
          weight: 320,
          base_experience: 178,
          type_1: 'bug',
          type_2: 'flying',
          attack: 45,
          defense: 50,
          hp: 60,
          special_attack: 90,
          special_defense: 80,
          speed: 70,
          ability_1: 'compound-eyes',
          ability_2: 'NA',
          ability_hidden: 'tinted-lens',
          color_1: '#A8B820',
          color_2: '#A890F0',
          color_f: '#A8AE52',
          egg_group_1: 'bug',
          egg_group_2: 'NA',
          url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
          generation_id: 1,
          evolves_from_species_id: '11',
          evolution_chain_id: 4,
          shape_id: 13,
          shape: 'bug-wings',
          pokebase: 'butterfree',
          pokedex: 'http://www.pokemon.com/us/pokedex/butterfree'
        },
        {
          _id: '5ff4fb7cd89993a89cc65454',
          pokemon: 'pidgeotto',
          id: 22,
          species_id: 17,
          height: 11,
          weight: 300,
          base_experience: 122,
          type_1: 'normal',
          type_2: 'flying',
          attack: 60,
          defense: 55,
          hp: 63,
          special_attack: 50,
          special_defense: 50,
          speed: 71,
          ability_1: 'keen-eye',
          ability_2: 'tangled-feet',
          ability_hidden: 'big-pecks',
          color_1: '#A8A878',
          color_2: '#A890F0',
          color_f: '#A8A295',
          egg_group_1: 'flying',
          egg_group_2: 'NA',
          url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
          generation_id: 1,
          evolves_from_species_id: '16',
          evolution_chain_id: 6,
          shape_id: 9,
          shape: 'wings',
          pokebase: 'pidgeotto',
          pokedex: 'http://www.pokemon.com/us/pokedex/pidgeotto'
        }
      ]}
    />);

  const pokemons = screen.getByRole('list', { name: 'pokemonList' });
  expect(pokemons).toMatchSnapshot();

});

