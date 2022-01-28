import React, { useContext,useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import {FirebaseContext} from '../../context/FirebaseProvider';

const Navbar = () => { 

    const responsiveMenuRef = useRef(null);
    const {user} = useContext(FirebaseContext);

    const handleResponsiveMenu = () => {
        responsiveMenuRef.current.classList.toggle('active-menu')
    }
   
    return (
        <header className="header">
            <div className="header-container">
                <div className="brand-logo">
                    <NavLink to="/" className="logo">Travelerz</NavLink>
                </div>
                <div className="menu" ref={responsiveMenuRef}>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>                           
                            {
                               !user.email ?
                                <>
                                    <li>
                                        <NavLink to="/login">login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/registration">registration</NavLink>
                                    </li> 
                                </>
                                :
                                <li>
                                    <NavLink to="/dashboard" id="dashboard">dashboard</NavLink>
                                </li> 
                            } 
                                                                                  
                        </ul>
                    </nav>
                </div>
                <div className="icons">
                    <div id="menu-btn" className="fas fa-bars" onClick={handleResponsiveMenu} />                
                </div>                
            </div>
        </header>
    );
};

export default Navbar;