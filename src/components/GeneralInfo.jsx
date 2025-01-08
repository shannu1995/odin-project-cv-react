import { useState } from 'react'
import '../styles/App.css'

function GeneralInfo({name = "John Smith", email = "John.Smith321sfa@gmail.com", phone="(717) 550-1675"}){
    const [info, setInfo] = useState({name, email, phone});
    return(
        <>
            <div className='center-align' id='general-info'>
                <h1>{info.name}</h1>
                <h2>{info.email}</h2>
                <h2>{info.phone}</h2>
                <button type='button'>Edit</button>
            </div>
        </>
    );
};

export default GeneralInfo;