import React from "react";
import './Card.css'

const Card = (props) => {
    return <div className="column">
        <img src={props.avatar} alt="staff" />
        <h3 style={{fontSize: "35px"}}>{props.name}</h3>
        <p style={{fontSize: "25px"}}>{props.position}</p>
        <p>{props.rating}</p>
        </div>
}

export default Card;