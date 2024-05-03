import React from 'react';
import { Link } from 'react-router-dom';
import './EventPage.css'; // Import CSS for styling
import { LazyLoadImage } from 'react-lazy-load-image-component';

function EventPage({ events }) {
  return (
    <div className="event-page">
      <h2>Our Events</h2>
      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <LazyLoadImage src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <Link to={`${event.id}`} className="learn-more-btn">Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventPage;
