
export default function SortForm(){
  return (
    <form>
      <h3>Sort Pokemon by Ability</h3>
      <input type="radio" id="html" name="fav_language" value="desc"/>
      <label htmlFor="descending">Descending</label>
      <input type="radio" id="html" name="fav_language" value="desc"/>
      <label htmlFor="descending">Ascending</label>
    </form>
  );
}