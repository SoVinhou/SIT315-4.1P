import React from 'react'
import './App.css'

function NavBar() {
    return(
    <nav className = "nav">
        <a href="/" className="Site-title">
            <img src = {require("./images/logo.png")} alt="logo" width={300} height={100} />
        </a>
        <ul>
            <li>
                <a href="/">Find DEV</a>
            </li>
            <li>
                <a href="/">Find Jobs</a>
            </li>
            <li>
                <a href="/">Login</a>
            </li>
            <li>
                <a href="/">Create Account</a>
            </li>
        </ul>
    </nav>
    )
}   

export default NavBar;