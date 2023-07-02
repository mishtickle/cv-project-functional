import React from 'react';

const WorkExperience = (props) => {
    function handleCompanyChange(event) {
        props.onCompanyChange(event.target.value);
    }

    function handlePositionChange(event) {
        props.onPositionChange(event.target.value);
    }

    function handleTasksChange(event) {
        props.onTasksChange(event.target.value);
    }

    function handleDatesChange(event) {
        props.onDatesChange(event.target.value);
    }

    function handleSubmitWork(event){
        props.submitWork(event);
    }
    const { userCompany, userPosition, userTasks, userDates } = props;
    return(
        <>
            <form onSubmit={handleSubmitWork} label="Work Experience">
                <input type = "text" placeholder="Company Name" name="userCompany" value={userCompany} onChange={handleCompanyChange} />
                <br/>
                <input type = "text" placeholder="Position Title" name="userPosition" value={userPosition} onChange={handlePositionChange} />
                <br/>
                <textarea placeholder="Main Tasks" name="userTasks" value={userTasks} onChange={handleTasksChange}/>
                <br/>
                <input type = "text" placeholder="Dates Worked" name="userDates" value={userDates} onChange={handleDatesChange} />
                <br/>
                <button>Submit</button>
            </form>
            
        </>
        
    )
}

export default WorkExperience;