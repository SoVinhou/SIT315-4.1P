import React from 'react'
import './Bottom.css'

function Buttom() {
    return (
        <div className="banner">
            <div className="row-container">
                <div className="Banner-row">
                    <h1>For Dev</h1>
                    <ul>
                    <li><a href="/">How it works</a></li>
                        <li><a href="/">How to create a profile</a></li>
                        <li><a href="/">Find jobs</a></li>
                    </ul>
                </div>
                <div className="Banner-row">
                    <h3>For Clients</h3>
                    <ul>
                        <li><a href="/">How it works</a></li>
                        <li><a href="/">How to post a job</a></li>
                        <li><a href="/">Find dev</a></li>
                    </ul>
                </div>
                <div className="Banner-row">
                    <h2>Stay Connected</h2>
                    <div className="socialMedia">
                        <a href="/"><img src = {require("./images/facebook.png")} alt="facebook" /></a>
                        <a href="/"><img src = {require("./images/twitter.png")} alt="twitter" /></a>
                        <a href="/"><img src = {require("./images/instagram.png")} alt="instagram" /></a>
                    </div>
                </div>
            </div>
            <div className="Bottom-Banner-row">
                <h4>DEVLink</h4>
                <ul>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Terms</a></li>
                    <li><a href="/">Code of Conduct</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Buttom;



