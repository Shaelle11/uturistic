import React, { useState } from 'react';
import './EventCarousel.css'

function Carousel({ events, onSelectEvent }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSelectImage = (index) => {
        setSelectedIndex(index);
        onSelectEvent(index);  // This could scroll to or highlight the event card
    };

    return (
        <div className="carousel-container">
            {events.map((event, index) => (
                <img
                    key={event.id}
                    src={event.image}
                    alt={event.title}
                    className={`carousel-image ${index === selectedIndex ? 'active' : ''}`}
                    onClick={() => handleSelectImage(index)}
                />
            ))}
        </div>
    );
}

export default Carousel;