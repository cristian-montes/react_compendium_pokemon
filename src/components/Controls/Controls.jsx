import FilteredForm from '../Forms/FilterForm';
import { SearchForm } from '../Forms/SearchForm';
import SortForm from '../Forms/SortForm';


export default function Controls({ 
  searchName, setSearchName, 
  handleSubmit, 
  abilities, 
  setSelectedAbility, 
  selectedAbility,
  sorted, setSorted,
  handleSort
})
{
  return (
    <section>
      <SearchForm 
        searchName= {searchName}
        setSearchName = {setSearchName}
        handleSubmit={handleSubmit}
      />
      
      <FilteredForm abilities={abilities} setSelectedAbility={setSelectedAbility}
        selectedAbility={selectedAbility}/>

      <SortForm sorted={sorted}
        setSorted={setSorted}
        handleSort={handleSort} 
      />
    </section>
  );

}