import React from 'react'
import './CustomersHeader.css'

function Customers(props) {
    return (
        <div className="headers-div">
            <h1>{props.text}</h1>
            <hr class="line"></hr>
        </div>
    );
}


export default Customers;