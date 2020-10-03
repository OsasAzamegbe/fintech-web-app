import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {MdFingerprint} from 'react-icons/md'


const Navbar = () => {
    const [click, setClick] = useState(false)

    const clickHandler = () => setClick(!click)


    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" >
                    <MdFingerprint className="navbar-icon"/>
                    Shinzu
                </Link>
                <div className="menu-icon" onClick={clickHandler} >              
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links">
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links">
                            Products
                        </Link>
                    </li>
                    <li className="nav-btn">
                        <Link to="/sign-up" className="btn-link">
                            {button ? 
                            <Button buttonStyle="btn--outline">SIGN UP</Button>
                            :
                            <Button buttonStyle="btn--outline" buttonSize="btn--mobile">SIGN UP</Button>}>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar