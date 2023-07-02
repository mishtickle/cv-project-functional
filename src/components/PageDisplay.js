import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo.js';
import EducationalExperience from './EducationalExperience';
import WorkExperience from './WorkExperience';
import DisplayEducation from './DisplayEducation.js';
import DisplayWork from './DisplayWork.js';
import uniqid from "uniqid";

const PageDisplay = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ educationalExperience, setEducationalExperience ] = useState( {
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: '',
        id: uniqid()
    } );
    const [ educationArray, setEducationArray ] = useState([]);
    const [ workExperience, setWorkExperience ] = useState( {
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        datesWorked: '',
        id: uniqid()
    } );
    const [ workArray, setWorkArray ] = useState([]);
    

    function handleNameChange(userName){
        setName(userName);
    }
    function handleEmailChange(userEmail){
        setEmail(userEmail);
    }
    function handlePhoneChange(userPhone){
        setPhone(userPhone);
    }

    function handleSchoolChange(userSchoolName){
        setEducationalExperience(prevState => ({ ...prevState, schoolName: userSchoolName}))
    }

    function handleTitleChange(userTitle){
        setEducationalExperience(prevState => ({...prevState, titleOfStudy: userTitle}))
    }

    function handleDateChange(userDate){
        setEducationalExperience(prevState => ({...prevState, dateOfStudy: userDate}))
    }

    function onSubmitEducationTask(event){    
        event.preventDefault();
        setEducationArray([...educationArray, educationalExperience]);
        setEducationalExperience({
            schoolName: '', 
            titleOfStudy: '', 
            dateOfStudy: '', 
            id: uniqid()
        })
    };

    function handleCompanyChange(userCompany){
        setWorkExperience(prevState => ({...prevState, companyName: userCompany}))
    }

    function handlePositionChange(userPosition){
        setWorkExperience(prevState => ({...prevState, positionTitle: userPosition}))
    }

    function handleTaskChange(userTasks){
        setWorkExperience(prevState => ({...prevState, mainTasks: userTasks}))
    }

    function handleDatesChange(userDates){
        setWorkExperience(prevState => ({...prevState, datesWorked: userDates}))
    }

    function onSubmitWork(event){
        event.preventDefault();
        setWorkArray([...workArray, workExperience]);
        setWorkExperience({
            companyName: '',
            positionTitle: '',
            mainTasks: '',
            datesWorked: '',
            id: uniqid()
        })
    }

    return(
        <div>
            <h1>Curriculum Vitae</h1>
            <h3>General Info</h3>
            <GeneralInfo 
                userName={name} 
                userEmail={email} 
                userPhone={phone} 
                onNameChange={handleNameChange} 
                onEmailChange={handleEmailChange} 
                onPhoneChange={handlePhoneChange}/>
            <h3>Educational Experience</h3>
            <EducationalExperience  
                userSchoolName={educationalExperience.schoolName} 
                userTitle={educationalExperience.titleOfStudy} 
                userDate={educationalExperience.dateOfStudy}
                onSchoolChange={handleSchoolChange}
                onTitleChange={handleTitleChange}
                onDateChange={handleDateChange}
                submitEducationTask={onSubmitEducationTask}/>
            <h3>Work Experience</h3>
            <WorkExperience
                userCompany={workExperience.companyName}
                userPosition={workExperience.positionTitle}
                userTasks={workExperience.mainTasks}
                userDates={workExperience.datesWorked}
                onCompanyChange={handleCompanyChange}
                onPositionChange={handlePositionChange}
                onTasksChange={handleTaskChange}
                onDatesChange={handleDatesChange}
                submitWork={onSubmitWork}/>
    <h1>Curriculum Vitae</h1>
            <h3>General Info</h3>
            <p contentEditable>Name: {name}</p>
            <p contentEditable>Email: {email}</p>
            <p contentEditable>Phone: {phone}</p>
            <br></br>
             <h3>Educational Experience</h3>
            <DisplayEducation myArray={educationArray}/>
            <h3>Work Experience</h3>
            <DisplayWork workArray={workArray}/>
        </div>
    )
}

export default PageDisplay;