import { useState } from "react";
import Form from "./components/Form";
import Name from "./components/Name";
import FilteredName from "./components/FilteredName";
import Filter from "./components/Filter";

const App = () => {
  //store persons & phone number
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  //add new person
  const [newName, setNewName] = useState("");
  //add new number
  const [newNumber, setNewNumber] = useState("");
  //filter input
  const [filterVariable, setNewFilter] = useState("");

  //update filter
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    console.log(event.target.value);
  };

  //displaying filtered list with conditional logic
  const reg = new RegExp(filterVariable, "i");
  console.log(persons.filter((person) => person.name.match(reg)));
  let filteredList = persons.filter((person) => person.name.match(reg));
  //if no filter, no list
  if (filterVariable == "") {
    filteredList = [];
  }

  //fire function on click to add a person
  const clickedAdd = (event) => {
    event.preventDefault();
    //store name and number
    const personObject = {
      name: newName,
      number: newNumber,
    };
    //check for duplicates
    if (persons.find((person) => person.name === newName)) {
      //reject duplicate
      console.log("duplicate");
      alert(`${newName} is already in the phonebook`);
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
      <Filter
        filterVariable={filterVariable}
        handleFilterChange={handleFilterChange}
      />
      <p>
        {filteredList.map((filteredPerson) => (
          <FilteredName
            key={filteredPerson.name}
            filteredPerson={filteredPerson}
          />
        ))}
      </p>
      <h2>Add new contact</h2>
      <Form
        clickedAdd={clickedAdd}
        newName={newName}
        handleChange={handleChange}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
      />
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
