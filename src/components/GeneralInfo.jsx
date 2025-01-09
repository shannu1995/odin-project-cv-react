import { useState } from 'react'
import '../styles/App.css'

function GeneralInfo({name = "John Smith", email = "John.Smith321sfa@gmail.com", phone="(717) 550-1675"}){
    const [info, setInfo] = useState({name, email, phone});
    const [isEditing, setIsEditing] = useState(false);
    const handleEditButton = () => {
        setIsEditing(true);
    };
    const handleSaveButton = () => {
        setIsEditing(false);
    };
    const handleDataChange = (e) => {
        const {name, value} = e.target;
        //setInfo({...info, [name]: value});
        setInfo((prevInfo) => {
            return {...prevInfo, [name]: value};
        });
    };
    const handleCancelButton = () => {
        setInfo({name, email, phone});
        setIsEditing(false);
    };
    return(
        <>
            {!isEditing ?(
            <>
                <div className='center-align' id='general-info'>
                    <h1>{info.name}</h1>
                    <h2>{info.email}</h2>
                    <h2>{info.phone}</h2>
                </div>
                <button type='button' className='right-align' onClick={handleEditButton}>Edit</button>
            </>
            ):(
            <>
                <div className='center-align' id='general-info'>
                    <input type='text' name='name' value={info.name} onChange={handleDataChange} />
                    <input type='text' name='email' value={info.email} onChange={handleDataChange}/>
                    <input type='text' name='phone' value={info.phone} onChange={handleDataChange}/>
                </div>
                <button type='button' className='right-align' onClick={handleSaveButton}>Save</button>
                <button type='button' className='right-align' onClick={handleCancelButton}>Cancel</button>
            </>
            )}
        </>
    );
};

export default GeneralInfo;

function test(){
    <>
     {!isEditing ?(
        <h1>Not Editing</h1>
     ):(
        <h1>Editing</h1>
     )}
    </>
};