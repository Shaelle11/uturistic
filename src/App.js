import React from 'react';
import Navbar from './Components/Navbar';
import CustomCursor from './Components/CustomCursor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import PaymentPage from './Pages/PaymentPage';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import './App.css';
import events from './Components/map';
import EventPage from './Pages/EventPage';
import EventsDetailsPage from './Pages/EventsDetailPage';

function App() {
  return (
    <Router>
    <div>
      
      <Navbar />
      <CustomCursor/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/events" element ={<EventPage events={events}/> }/>
      <Route path="/payment" element={<PaymentPage/>} />
      <Route path="/events/:id"
          element={<EventsDetailsPage events={events} />}/>
      </Routes>
      <Footer />
      </div>
      </Router>
  );
}

export default App;
