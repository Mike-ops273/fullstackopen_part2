const NotifyFailure = ({failureMessage}) => {
    if (failureMessage === null) {
        return null; //null for getting rid of message after a timer
    }
     return (
         <div className="failureMessageStyle">
            {failureMessage}
         </div>
    )
}

export default NotifyFailure;