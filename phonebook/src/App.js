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
    for (let i=0; i<persons.length; i++) {
      let stringifiedName = JSON.stringify(persons); 
      if(stringifiedName.includes(newName)) {
        //prevent duplicates
        console.log("duplicate name!"); 
        alert(`${newName} is already in the phonebook`) 
        break;
      } else {
        //allow adding new name
        console.log("no duplicate");
        setPersons(persons.concat(personObject)); 
        //reset form fields for next input
        setNewName(""); 
        setNewNumber("");
      }
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
