import React from 'react';

const DisplayEducation = (props) => {
    const { myArray } = props;
    return(
        <>
            {myArray.map((arrayObject) => {
                return <>                            
                        <p contentEditable suppressContentEditableWarning={true}>{arrayObject.schoolName}</p>
                        <p contentEditable suppressContentEditableWarning={true}>{arrayObject.titleOfStudy}</p>
                        <p contentEditable suppressContentEditableWarning={true}>{arrayObject.dateOfStudy}</p>
                        <br></br>
                    </>
            })}        
        </>
    )
}

export default DisplayEducation;