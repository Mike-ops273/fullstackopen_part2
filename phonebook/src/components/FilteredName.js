//display filtered name(s)
//show filtered names
const FilteredName = ({ filteredPerson }) => {
  return (
    <li>
      {filteredPerson.name}: {filteredPerson.number}
    </li>
  );
};

export default FilteredName;
