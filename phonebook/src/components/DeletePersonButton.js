import personService from "../services/personService";

//to remove a person
const DeletePersonButton = (props) => {
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

export default DeletePersonButton;