import React from 'react';
import './HeroSection.css';
import image from '../Assets/21452141_6431137.svg'; // Import CSS for styling

function HeroSection() {
    return (
        <div className="hero-section">
            {/* Background Animation */}
            <div className="background-animation">
                {/* Animation elements (stars, planets, spacecraft) */}
            </div>

            {/* Text Content */}
            <div className="text-content">
                <h1>Welcome to the Uturistic Community</h1>
                <p>Join us in exploring the future of technology, innovation, and community engagement.</p>
                <button>Get Involved</button>
            </div>

            <img className='image-content' src={image}/>
        </div>
    );
}

export default HeroSection;
