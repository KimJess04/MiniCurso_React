//ESTRUCTURA DE LA CARD

import "./Card.css";
import { Link } from "react-router-dom";

function Card({title = "titulo por defecto", description ="descripcion por defecto"}){
    return(
    <div className="Card">
        <Link to={title}>
            <h2> {title} </h2> 
        </Link>
        <p> {description}  </p>
    </div>
    );
}

export default Card;

//{title = "titulo por defecto", description ="descripcion por defecto"}

/*
function Card(props){
    return(
    <div className="Card">
        <h2> {props.title} </h2>
        <p> {props.description}  </p>
    </div>
    );
}
*/