import { SearchForm } from '../Forms/SearchForm';


export default function Controls({ searchName, setSearchName, handleSubmit }){
  return (
    <SearchForm 
      searchName= {searchName}
      setSearchName = {setSearchName}
      handleSubmit={handleSubmit}
    />
  );

}