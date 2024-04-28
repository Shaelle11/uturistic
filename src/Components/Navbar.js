import React, { useState } from 'react';
import './Navbar.css'; // Ensure you create this CSS file
import logo from '../Assets/Untitled37_20240309043855-removebg-preview.png';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <nav className="navbar">
            <img className={`navbar-logo ${showSidebar ? 'active' : ''}`} width={50} height={50} src={logo} alt="Logo" />
            <div className={`sidebar-overlay ${showSidebar ? 'active' : ''}`} onClick={toggleSidebar}></div>
            <ul className={`nav-links ${showSidebar ? 'active' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#about">About</a></li>
                <li>
                    {/* Use Link instead of <a> */}
                    <button onClick={() => window.alert('Redirecting to tickets...')}>  <Link to="/payment">Get Your Tickets Now</Link></button>
                  
                </li>
            </ul>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
                <div className={`bar ${showSidebar ? 'animate' : ''}`}></div>
                <div className={`bar ${showSidebar ? 'animate' : ''}`}></div>
                <div className={`bar ${showSidebar ? 'animate' : ''}`}></div>
            </div>
        </nav>
    );
}

export default Navbar;