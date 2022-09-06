const NotifySuccess = ({successMessage}) => {
    if (successMessage === null) {
        return null; //null for getting rid of message after a timer
    }
     return (
         <div className="successMessageStyle">
            {successMessage}
         </div>
    )
}

export default NotifySuccess;