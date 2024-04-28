import React, { useState, useEffect } from 'react';
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
import Sidebar from './Components/Sidebar';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth <= 650) {
              setShowSidebar(true);
          } else {
              setShowSidebar(false);
          }
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Router>
    <div>
      
      <Navbar />
      <CustomCursor classname="cursor"/>
      {showSidebar ? <Sidebar /> : <Navbar />}
      <Routes>
      <Route path="uturistic/" element={<Home/>} />
      <Route path="uturistic/events" element ={<EventPage events={events}/> }/>
      <Route path="uturistic/payment" element={<PaymentPage/>} />
      <Route path="uturistic/events/:id"
          element={<EventsDetailsPage events={events} />}/>
      </Routes>
      <Footer />
      </div>
      </Router>
  );
}

export default App;
