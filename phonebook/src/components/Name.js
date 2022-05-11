//display name(s)
const Name = ({ persons, filter }) => {
  const reg = new RegExp(filter, "i");
  let filteredList = persons.filter((person) => person.name.match(reg));
  console.log(filteredList == true);
  if (filter == "") {
    return (
      <>
        {persons.map((person) => (
          <li key={person.name}>
            {" "}
            {person.name}: {person.number}
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
