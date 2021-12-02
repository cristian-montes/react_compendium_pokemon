
export default function Pokemon({ poke }){
  const { pokemon, type_1, type_2, attack, defense, speed, egg_group_1, url_image } = poke;
  return (
    <figure>
      <img src={url_image} alt={pokemon}/>
      <div>
        <h3>{pokemon}</h3>
        <p>Type: {type_2}</p>
        <p>Attack: {attack}</p>
        <p>Defense: {defense}</p>
        <p>Group: {egg_group_1}</p>
      </div>
    </figure>
  );
}