
export default function SortForm({ sorted, handleSort }){
  return (
    <form aria-label="sortForm" >
      <h3>Sort Pokemon by Ability</h3>
      <input 
        type="radio" 
        id="desc" 
        name={sorted}
        value='desc'
        onChange={(event) => handleSort(event)}
    
      />
      <label htmlFor="descending">Descending</label>

      <input 
        type="radio" 
        id="asc" 
        name={sorted} 
        value="asc"
        onChange={(event) => handleSort(event)}
      />
      <label htmlFor="ascending">Ascending</label>
 
    </form>
  );
}