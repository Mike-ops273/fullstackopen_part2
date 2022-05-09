//display filtered name(s)
const FilteredName = ({ filteredPerson }) => {
  return (
    <li>
      {filteredPerson.name}: {filteredPerson.number}
    </li>
  );
};

export default FilteredName;
