
export default function SortForm({ sorted, setSorted, handleSorted }){
  return (
    <form aria-label="sortForm" onClick={handleSorted}>
      <h3>Sort Pokemon by Ability</h3>
      <input 
        type="radio" 
        id="desc" 
        name={sorted}
        value='desc'
        onChange={(event) => setSorted(event.target.value)}
      />
      <label htmlFor="descending">Descending</label>

      <input 
        type="radio" 
        id="asc" 
        name={sorted} 
        value="asc"
        onChange={(event) => setSorted(event.target.value)}
      />
      <label htmlFor="ascending">Ascending</label>
    </form>
  );
}