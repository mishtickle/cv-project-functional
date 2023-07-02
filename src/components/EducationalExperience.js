import React from 'react';

const EducationalExperience = (props) => {
    function handleSchoolChange(event) {
        props.onSchoolChange(event.target.value);
    }

    function handleTitleChange(event) {
        props.onTitleChange(event.target.value);
    }

    function handleDateChange(event) {
        props.onDateChange(event.target.value);
    }

    function handleSubmitEducationTask(event){
        props.submitEducationTask(event);
    }
    const { userSchoolName, userTitle, userDate } = props;
    return(
        <>
            <form onSubmit={handleSubmitEducationTask} label="Educational Experience">
                <input type = "text" placeholder="School Name" name="userSchoolName" value={userSchoolName} onChange={handleSchoolChange} />
                <br/>
                <input type = "text" placeholder="Title of Study" name="userTitle" value={userTitle} onChange={handleTitleChange} />
                <br/>
                <input type="text" placeholder="Date of Study" name="userDate" value={userDate} onChange={handleDateChange} />
                <br/>
                <button>Submit</button>
            </form>
            
        </>
        
    )
}

export default EducationalExperience;