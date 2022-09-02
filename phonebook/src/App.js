import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Names from "./components/Names";
import Form from "./components/Form";
import personService from "./services/personService";

const App = () => {
  //store persons & phone numbers
  const [persons, setPersons] = useState([]);

  /* old code
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  */
  
  const [newName, setNewName] = useState(""); //add new person
  const [newNumber, setNewNumber] = useState(""); //add new number
  const [filter, setNewFilter] = useState(""); //filter input

  /*
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "persons"); //event loop?
  */
 useEffect(() => {
  personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
 }, []) //this [] stops an infinite render loop

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
    let personIdForServer = persons.find((person) => person.name === newName) //store person cause it keeps disappearing
    console.log(personIdForServer);
    //check for duplicate person
    if (personIdForServer) {
      //reject duplicate
      console.log("duplicate");
      //alert(`${newName} is already in the phonebook`);
      if(window.confirm(`${newName} is already in the phonebook, update number?`)) {
        console.log(persons);
        //axios.put(`http://localhost:3001/persons/${personIdForServer.id}`, personObject)
        personService
        .update(personIdForServer.id, personObject)
      }
    } else {
      //passed duplicate test
      console.log("no duplicates");
      //add new name and number permanently as well as reset form fields
      //setPersons(persons.concat(personObject)); //frontend and backend may not match if promise rejects
      /*
      axios
        .post("http://localhost:3001/persons", personObject)
        .then(response=>console.log(response));
      */
     personService
      .create(personObject) //creates a new pesonObject to be stored on the server
      .then(response => {
        console.log(response);
        setPersons(persons.concat(personObject)); //backend and frontend will have matching data
      })
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <h1>Phonebook</h1>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <Form
        handleAddClick={handleAddClick}
        newName={newName}
        handleChange={handleChange}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
      />

      <Names persons={persons} filter={filter} />
    </div>
  );
};

export default App;
