import React from 'react'
import './FreelancersHeader.css'

function Freelancers(props) {
    return (
        <div className="headers-div">
            <h1>{props.text}</h1>
            <hr class="line"></hr>
        </div>
    );
}


export default Freelancers;