export default function FilteredForm({ abilities, selectedAbility, setSelectedAbility }){
  return (
    <div>        
      <h3> Pokemon by Ability</h3>
      <select 
        value={selectedAbility}
        onChange = {(event) =>setSelectedAbility(event.target.value)}
      >
        <option value='all'>All</option>
        {abilities.map((ability) => (
          <option value={ability} key={ability}>{ability}</option>
        ))}
      </select>
    </div>
  );
}