import React from 'react';

const GeneralInfo = (props) => {
    function handleNameChange(event) {
        props.onNameChange(event.target.value);
    }
    function handleEmailChange(event) {
        props.onEmailChange(event.target.value);
    }
    function handlePhoneChange(event) {
        props.onPhoneChange(event.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        console.log(this.props);
    }

    const { userName, userEmail, userPhone } = props;
    return(
        <>
            <form label="General Info">
                <input type = "text" placeholder="Name" name="userName" value={userName} onChange={handleNameChange} />
                <br/>
                <input type = "text" placeholder="Email" name="userEmail" value={userEmail} onChange={handleEmailChange} />
                <br/>
                <input type="text" placeholder="Phone Number" name="userPhone" value={userPhone} onChange={handlePhoneChange} />
                <br/>
                <button onClick={ (e) => this.handleClick(e)}>Submit</button>
            </form>
            
        </>
        
    )
}

export default GeneralInfo;