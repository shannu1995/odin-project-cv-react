import {useState} from 'react';
import '../styles/App.css';

function Experience(){
    const [experiences, setExperiences] = useState([]);
    const [savedExperiences, setSavedExperiences] = useState([]);
    const [isSaved, setIsSaved] = useState(false);

    const addExperience = () => {
        setExperiences([...experiences, { jobTitle: "", company: "", fromYear: "", toYear: "", description: "" }]);
    };

    const updateExperience = (index, field, value) => {
        const newExperiences = experiences.map((exp, i) =>
            i === index ? { ...exp, [field]: value } : exp
        );
        setExperiences(newExperiences);
    };

    const deleteExperience = (index) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    };

    const saveExperiences = () => {
        setSavedExperiences(experiences);
        setIsSaved(true); // Hide the form
    };

    const resetExperiences = () => {
        setExperiences([]);
        setSavedExperiences([]);
        setIsSaved(false); // Show the form again
    };

    return (
        <div>
            {!isSaved ? (
                <>
                    <button onClick={addExperience}>Add Experience</button>
                    {experiences.length > 0 && <button onClick={saveExperiences}>Save</button>}
                    
                    {experiences.length === 0 && <p>No experiences added yet.</p>}
                    
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience">
                            <input 
                                type="text" 
                                placeholder="Job Title" 
                                value={exp.jobTitle} 
                                onChange={(e) => updateExperience(index, "jobTitle", e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder="Company" 
                                value={exp.company} 
                                onChange={(e) => updateExperience(index, "company", e.target.value)}
                            />
                            <input 
                                type="number" 
                                placeholder="From Year" 
                                value={exp.fromYear} 
                                onChange={(e) => updateExperience(index, "fromYear", e.target.value)}
                            />
                            <input 
                                type="number" 
                                placeholder="To Year" 
                                value={exp.toYear} 
                                onChange={(e) => updateExperience(index, "toYear", e.target.value)}
                            />
                            <textarea 
                                placeholder="Description" 
                                value={exp.description} 
                                onChange={(e) => updateExperience(index, "description", e.target.value)}
                            />
                            <button onClick={() => deleteExperience(index)}>Delete</button>
                        </div>
                    ))}
                </>
            ) : (
                <div>
                    <h2>Saved Experiences</h2>
                    {savedExperiences.map((exp, index) => (
                        <div key={index} className="saved-experience">
                            <h3>{exp.jobTitle} at {exp.company}</h3>
                            <p>{exp.fromYear} - {exp.toYear}</p>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                    <button onClick={resetExperiences}>Reset & Add New</button>
                </div>
            )}
        </div>
    );
};

export default Experience;