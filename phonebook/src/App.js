import { useState } from "react";
import Name from "./components/Name"; 
import FilteredName from "./components/FilteredName";

const App = () => {
  //store persons & phone number
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number:"040-1234567" },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }]);
  //add new person
  const [newName, setNewName] = useState("");   
  //add new number 
  const [newNumber, setNewNumber] = useState(""); 
  const [filterVariable, setNewFilter] = useState(""); 

  //////////////////////
  //const dude = "el";  
  const reg = new RegExp(filterVariable, 'i');
  console.log(persons.filter(person => person.name.match(reg))); 
  let filteredList = persons.filter(person => person.name.match(reg)) 
  if(filterVariable == "") {
    filteredList = [];
  }
  
  ///////////////////////
  
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    console.log(event.target.value);
  }; 



  //fire function on click
  const clickedAdd = (event) => {
    event.preventDefault(); 
    //store name and number
    const personObject = {
      name: newName, 
      number: newNumber,
    }; 
    //check for duplicates 
    if (persons.find(person => person.name === newName)) {
      //reject duplicate
      console.log("duplicate"); 
      alert(`${newName} is already in the phonebook`)
    } else {
      console.log("no duplicates");  
      //add new name and number as well as reset form fields
      setPersons(persons.concat(personObject));
      setNewName(""); 
      setNewNumber("");
    }
  }; 

  //handle updating name input field
  const handleChange = (event) => { 
    setNewName(event.target.value);  
    console.log(event.target.value);
  };

  //handle updating phone number input field
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  }; 



  return (
    <div>
      <div>debug: {newName}</div> 
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filterVariable} onChange={handleFilterChange} />
      </div> 
      <p>
        {filteredList.map((filteredPerson) => (
          <FilteredName key={filteredPerson.name} filteredPerson={filteredPerson} />
        ))}
      </p>
      <h2>Add new contact</h2>
      <form onSubmit={clickedAdd}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div> 
      </form>
      <h2>Contacts</h2>
      <p>
        {persons.map((person) => (
          <Name key={person.name} person={person} />
        ))}
      </p>
    </div>
  );
};

export default App;
