//handle filter input field
const Filter = ({ filterVariable, handleFilterChange }) => { 
  return (
    <div>
      Filter: <input value={filterVariable} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
