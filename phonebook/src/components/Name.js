//import personService to facilitate deleting person
import personService from "../services/personService"

//display name(s)
const Name = ({ persons, filter }) => {

  const Button = (props) => { //to remove person
    const removePerson = () => {
      console.log(props.id);
      if (window.confirm(`Delete ${props.name}?`)) {
        personService
        .remove(props.id)
        console.log("clicked yes");
      } 
    }
    return (
      <button onClick={removePerson}>Delete</button>
    )
  }

  const reg = new RegExp(filter, "i");
  let filteredList = persons.filter((person) => person.name.match(reg));
  if (filter == "") {
    return (
      <>
        {persons.map((person) => (
          <li key={person.name}>
            {" "}
            {person.name}: {person.number} <Button name={person.name} number={person.number} id={person.id} />
          </li>
        ))}
      </>
    );
  } else {
    return (
      <>
        {filteredList.map((filteredPerson) => (
          <li key={filteredPerson.name}>
            {filteredPerson.name}: {filteredPerson.number}
          </li>
        ))}
      </>
    );
  }
};

export default Name;
