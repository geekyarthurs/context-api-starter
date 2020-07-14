import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/measure">Measure</Link></li>
                <li><Link to="/records">Past Records</Link></li>
            </ul>
        </nav>
    )
}
