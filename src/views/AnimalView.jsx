import React from 'react';
import './AnimalView.css';

function AnimalView({animal}){
    return(
        <div className="AnimalView">
            <h1>{animal.name}</h1>
            <h2>{animal.description}</h2>
            <img src={animal.image} alt={animal.name + " image"} />
        </div>
    );
}

export default AnimalView;