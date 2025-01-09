import {useState} from 'react';
import '../styles/App.css';

function Experience({jobTitle = "Software Engineer", company = "Google", fromYear = 2015, toYear = 2020, 
    description = "Worked on cool stuff"}){
    const [experience, setExperience] = useState({jobTitle, company, fromYear, toYear, description});
    return (
        <div className='block'>
            <div className='left-align'>
                <h2>{experience.jobTitle}</h2>
                <p>{experience.description}</p>
            </div>
            <div className='right-align'>
                <h2>{experience.company}</h2>
                <h3>{experience.fromYear} - {experience.toYear}</h3>
            </div>
        </div>
    );
};

export default Experience;