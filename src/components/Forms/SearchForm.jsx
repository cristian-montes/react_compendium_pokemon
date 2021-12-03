
function SearchForm({ searchName, setSearchName, handleSubmit }){
  return (
    <form aria-label="searchForm" onSubmit={handleSubmit}>
      <h3> Catch a Pokemon </h3>
      <label htmlFor="pokename" > Pokemon: </label>
      <input
        id='pokename'
        name= 'name'
        type= 'text'
        value= {searchName}
        onChange={(event)=> setSearchName(event.target.value)}
      />
      <button type="submit"> Catch Poke</button>
    </form>
  );
}



export { SearchForm };