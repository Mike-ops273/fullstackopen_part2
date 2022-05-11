//the form
const Form = ({
  handleAddClick,
  newName,
  handleChange,
  newNumber,
  handleChangeNumber,
}) => {
  return ( 
    <form onSubmit={handleAddClick}> 
    <h2>Add New</h2>
      {/*console.log(handleAddClick)*/}
      {/*console.log(newName)*/}
      <div>debug: {newName}</div>
      <div>
        name: <input value={newName} onChange={handleChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleChangeNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;

