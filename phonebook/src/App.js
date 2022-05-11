import { useState } from "react"; 
import Filter from "./components/Filter";
import Name from "./components/Name"; 
import Form from "./components/Form";

const App = () => {
  //store persons & phone numbers
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState(""); //add new person
  const [newNumber, setNewNumber] = useState(""); //add new number
  const [filter, setNewFilter] = useState(""); //filter input

  //update filter field
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    console.log(event.target.value);
  }; 
  
  //handle updating name input field
  const handleChange = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  };

  //handle updating number input field
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  //handle form submit event
  const handleAddClick = (event) => {
    event.preventDefault();
    //store name and number termporarily
    const personObject = {
      name: newName,
      number: newNumber,
    };
    //check for duplicate person
    if (persons.find((person) => person.name === newName)) {
      //reject duplicate
      console.log("duplicate");
      alert(`${newName} is already in the phonebook`);
    } else {
      //passed duplicate test
      console.log("no duplicates");
      //add new name and number permanently as well as reset form fields
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <h1>Phonebook</h1> 

      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      /> 

      <Form
        handleAddClick={handleAddClick}
        newName={newName}
        handleChange={handleChange}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
      />

      <Name persons={persons} filter={filter} />
    </div>
  );
};

export default App;

