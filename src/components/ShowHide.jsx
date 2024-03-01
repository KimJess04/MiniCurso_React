import React from 'react'
import { useState } from 'react';

function ShowHide(){

    const[show, setShow] = useState(true);

    //Eventos de click
    const handleClick = (event) => {
        setShow(!show);
    }

    return (
    <div>
        <button onClick={handleClick}>{show ? "Hide" : "Show"} Text</button>
        {show && <h2>HIDE ME</h2>}
        </div>
        );
   
}

export default ShowHide;