import { useState } from "react";
import Names from "./components/Names";

const App = () => {
  //store persons
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  //add new person
  const [newName, setNewName] = useState("");

  //fire function on click
  const clickedAdd = (event) => {
    event.preventDefault();
    console.log("clicked!");
    const personObject = {
      name: newName,
    };
    //update state
    setPersons(persons.concat(personObject));
    setNewName(" ");
  };

  //handle updating input element
  const handleChange = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
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
          <Names key={person.name} person={person} />
        ))}
      </p>
    </div>
  );
};

export default App;
