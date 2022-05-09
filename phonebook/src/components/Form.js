//the form
const Form = ({
  clickedAdd,
  newName,
  handleChange,
  newNumber,
  handleChangeNumber,
}) => {
  return (
    <form onSubmit={clickedAdd}>
      {console.log(clickedAdd)}
      {console.log(newName)}
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
