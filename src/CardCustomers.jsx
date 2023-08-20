import React from "react";
import './CardCustomers.css'

const CardCustomers = (props) => {
    return <div className="column">
        <img src={props.avatar} alt="customers" />
        <h3>{props.name}</h3>
        <p>{props.position}</p>
        <p>{props.rating}</p>
        </div>
}

export default CardCustomers;