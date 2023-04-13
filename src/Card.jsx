import React from "react";
import './Card.css'

function Card({img, titulo, texto}) {
    return(
        <div className="card">
            <img src={img}/>
            <h4>{titulo}</h4>
            <p>{texto}</p>
        </div>
    )
}

export default Card