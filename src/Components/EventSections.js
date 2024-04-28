import React, { useState } from 'react';
import './EventSection.css';

function EventSections({ events }) {
    const [hoveredColor, setHoveredColor] = useState(null);

    const handleCardHover = (color) => {
        setHoveredColor(color);
    };

    const handleMouseLeave = () => {
        setHoveredColor(null);
    };

    return (
        <div className="events-section" id='events'>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-description">Explore our upcoming events and get involved!</p>
            <div className="event-cards-container">
                {events.map(event => (
                    <div
                        key={event.id}
                        className="event-card"
                        style={{ backgroundColor: event.color }}
                        onMouseEnter={() => handleCardHover(event.color)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={`/images/${event.image}`} alt={event.title} className="event-image" />
                        <div className="event-details">
                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-date">{event.date}</p>
                            <a href={`/events/${event.id}`} className="learn-more-btn">
                                Learn More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventSections;
