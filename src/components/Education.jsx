import { useState } from 'react'
import '../styles/App.css'

function Education({institution = "Random High School", diplomaName = "High School Diploma", year = 2012}){
    const [education, setEducation] = useState({institution, diplomaName, year});
    const [isEditing, setIsEditing] = useState(false);
    return(
        <div className='block'>
            <div className='left-align'>
                <h2>{education.institution}</h2>
            </div>
            <div className='right-align'>
                <h2>{education.diplomaName}</h2>
                <h3>{education.year}</h3>
            </div>
        </div>
    );
};

export default Education;