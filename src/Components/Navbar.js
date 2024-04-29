import React from 'react';
import './Navbar.css'; // Ensure you create this CSS file
import logo from '../Assets/Untitled37_20240309043855-removebg-preview.png';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar-logo" width={50} height={50} src={logo} alt="Logo" />
            <ul className="nav-links">
                <li><Link to="/uturistic">Home</Link></li> {/* Added slash before "uturistic" */}
                <li><Link to="/events">Events</Link></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#about">About</a></li>
                <li><button onClick={() => window.alert('Redirecting to tickets...')}><Link to="/payment">Get Your Tickets Now</Link></button></li>
            </ul>
        </nav>
    );
}

export default Navbar;
