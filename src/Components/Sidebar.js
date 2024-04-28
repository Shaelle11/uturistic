import React from 'react';
import './Sidebar.css'; // Ensure you create this CSS file
import { Link } from 'react-router-dom'; // Import Link from React Router

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#about">About</a></li>
                <li><button onClick={() => window.alert('Redirecting to tickets...')}>Get Your Tickets Now</button></li>
            </ul>
        </div>
    );
}

export default Sidebar;
