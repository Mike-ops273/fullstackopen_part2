//query field
const Query = ({ query, handleFilterChange }) => {
  return (
    <div>
      Find countries <input value={query} onChange={handleFilterChange} />
    </div>
  );
};

export default Query;
