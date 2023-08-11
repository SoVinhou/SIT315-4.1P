import React, { useState } from 'react';
import './EmailBox.css';

function EmailBox() {
    return (
        <div className="email-box">
            <h2>SIGN UP FOR DAILY INSIDER</h2>
            <div className="form">
                <input type="email" className="form-control" name="email" placeholder="Enter Your Email" required="required" />
            </div>    
            <div className="buttonSub">
                <button style={{border:"none", background:"none", color:"white", fontSize:"35px", fontWeight:"bold"}} type="submit" class="btn btn-lg btn-primary btn-block">SUBSCRIBE</button>
            </div> 
        </div>
    )
}


export default EmailBox;