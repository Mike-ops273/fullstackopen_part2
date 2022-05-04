import { useState } from "react";
import Name from "./components/Name";

const App = () => {
  //store persons & phone number
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number:"040-1234567" }]);
  //add new person
  const [newName, setNewName] = useState("");   
  //add new number 
  const [newNumber, setNewNumber] = useState("");

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
  };
  //handle updating phone number input field
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <p>
        {persons.map((person) => (
          <Name key={person.name} person={person} />
        ))}
      </p>
    </div>
  );
};

export default App;
