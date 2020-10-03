import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" >
                    Shinzu
                </Link>
            </div>
        </nav>

    )
}

export default Navbar