import React from 'react';
import { useParams } from 'react-router-dom';
import './EventsDetailsPage.css';

function EventsDetailsPage({ events }) {
  const { id } = useParams(); // Get the event ID from the URL params

  // Find the event with the matching ID
  const event = events.find(event => event.id === parseInt(id));

  // If event is not found, display a message
  if (!event) {
    return <div>Event not found.</div>;
  }

  return (
    <div className="event-details-page">
    <h2 className="event-title">{event.title}</h2>
    <img src={event.image} alt={event.title} className="event-image" />
    <p className="event-date">{event.date}</p>
    <p className="event-description">{event.description}</p>
  </div>
  );
}

export default EventsDetailsPage;
