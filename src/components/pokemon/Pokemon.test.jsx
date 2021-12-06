import { screen, render } from '@testing-library/react';
import Pokemon from './Pokemon';

it('Should render a pokemon', ()=> {
  render(
    <Pokemon 
      poke={
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
      }
    />
  );

  const poke = screen.getByText(/pidgeotto/i);
  expect(poke).toMatchSnapshot();
});