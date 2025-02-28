import { useState } from 'react'
import '../styles/App.css'

function Education(){
    const [educations, setEducations] = useState([]);
    const [savedEducations, setSavedEducations] = useState([]);
    const [isSaved, setIsSaved] = useState(false);
    const addEducation = () =>{
        setEducations([...educations, { school: "", degree: "", fromYear: "", toYear: "" }]);
    ;}
    const updateEducation = (index, field, value) => {
        const newEducations = educations.map((edu, i) =>
            i === index ? { ...edu, [field]: value } : edu
        );
        setEducations(newEducations);
    };
    const deleteEducation = (index) => {
        setEducations(educations.filter((_, i) => i !== index));
    };
    const saveEducations = () => {
        setSavedEducations(educations);
        setIsSaved(true);
    };
    const resetEducations = () => {
        setEducations([]);
        setSavedEducations([]);
        setIsSaved(false);
    };
    return (
        <div>
            {!isSaved ? (
                <>
                    <button onClick={addEducation}>Add Education</button>
                    {educations.length > 0 && <button onClick={saveEducations}>Save</button>}
                    {educations.length === 0 && <p>No educations added yet.</p>}
                    {educations.map((edu, index) => (
                        <div key={index} className="education">
                            <input 
                                type="text" 
                                placeholder="School"
                                value={edu.school}
                                onChange={(e) => updateEducation(index, "school", e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder="Degree" 
                                value={edu.degree} 
                                onChange={(e) => updateEducation(index, "degree", e.target.value)}
                            />
                            <input 
                                type="number" 
                                placeholder="From Year" 
                                value={edu.fromYear} 
                                onChange={(e) => updateEducation(index, "fromYear", e.target.value)}
                            />
                            <input 
                                type="number" 
                                placeholder="To Year" 
                                value={edu.toYear} 
                                onChange={(e) => updateEducation(index, "toYear", e.target.value)}
                            />
                            <button onClick={() => deleteEducation(index)}>Delete</button>
                        </div>
                    ))}
                </>
            ) : (
                <>
                    <button onClick={resetEducations}>Edit</button>
                    {savedEducations.length > 0 && (
                        <div>
                            <h2>Education</h2>
                            {savedEducations.map((edu, index) => (
                                <div key={index}>
                                    <p>{edu.school}</p>
                                    <p>{edu.degree}</p>
                                    <p>{edu.fromYear} - {edu.toYear}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Education;