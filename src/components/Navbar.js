import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {MdFingerprint} from 'react-icons/md'
import Button from './Button'
import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const clickHandler = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}  >
                    <MdFingerprint className="navbar-icon"/>
                    Shinzu
                </Link>
                <div className="menu-icon" onClick={clickHandler} >              
                    {click ? <FaTimes className="fa-times" /> : <FaBars className="fa-bars"/>}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu} >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu} >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu} >
                            Products
                        </Link>
                    </li>
                    <li className="nav-btn">
                        <Link to="/sign-up" className="btn-link" onClick={closeMobileMenu} >
                            {button ? 
                            <Button buttonStyle="btn--outline">SIGN UP</Button>
                            :
                            <Button buttonStyle="btn--outline" buttonSize="btn--mobile">SIGN UP</Button>}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar