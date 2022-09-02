//import personService to facilitate deleting person
import personService from "../services/personService";
import DeletePersonButton from "./DeletePersonButton";

//display name(s)
const Names = ({ persons, filter }) => {

  const reg = new RegExp(filter, "i");
  let filteredList = persons.filter((person) => person.name.match(reg));
  if (filter == "") {
    return (
      <>
        {persons.map((person) => (
          <li key={person.name}>
            {" "}
            {person.name}: {person.number} <DeletePersonButton name={person.name} number={person.number} id={person.id} />
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

export default Names;
