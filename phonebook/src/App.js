import { useState } from "react";
import Name from "./components/Name";

const App = () => {
  //store persons
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  //add new person
  const [newName, setNewName] = useState("");  

  //fire function on click
  const clickedAdd = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName, 
    }; 
    //check for duplicates 
    for (let i=0; i<persons.length; i++) {
      let stringifiedName = JSON.stringify(persons); 
      if(stringifiedName.includes(newName)) {
        //prevent duplicates
        console.log("duplicate name!"); 
        alert(`${newName} is already added to phonebook`) 
        break;
      } else {
        //allow adding new name
        console.log("no duplicate");
        setPersons(persons.concat(personObject));
        setNewName("");
      }
    }
  };

  //handle updating input element
  const handleChange = (event) => {
    setNewName(event.target.value);
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
