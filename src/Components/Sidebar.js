import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

import './Sidebar.css';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='sidebar_container'>
              <button className="sidebar-toggle" onClick={toggleSidebar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
        <div className={`sidebar ${isActive ? 'active' : ''}`}>   
            <ul className="sidebar-links">
                <li><Link to="/uturistic" className='element'>Home</Link></li>
                <li><Link to="/events" className='element'>Events</Link></li>
                <li><Link to="/blog" className='element'>Blog</Link></li>
                <li><Link to="/about" className='element'>About</Link></li>
                <li><button onClick={() => window.alert('Redirecting to tickets...')}><Link className='btn' to="/payment">Get Your Tickets Now</Link></button></li>
            </ul>
        </div>
        </div>
    );
};

export default Sidebar;
