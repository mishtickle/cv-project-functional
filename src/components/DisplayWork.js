import React from 'react';

const DisplayWork = (props) => {
    const { workArray } = props;
    return(
        <>
            {workArray.map((arrayObject) => {
                return <>                            
                        <p contentEditable>{arrayObject.companyName}</p>
                        <p contentEditable>{arrayObject.positionTitle}</p>
                        <p>Tasks:</p>
                        <p contentEditable>{arrayObject.mainTasks}</p>
                        <p contentEditable>{arrayObject.datesWorked}</p>
                        <br></br>
                    </>
            })}        
        </>
        
    )
}    


export default DisplayWork;