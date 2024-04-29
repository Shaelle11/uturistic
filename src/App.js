import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import CustomCursor from './Components/CustomCursor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentPage from './Pages/PaymentPage';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import events from './Components/map';
import EventPage from './Pages/EventPage';
import EventsDetailsPage from './Pages/EventsDetailPage';
import Sidebar from './Components/Sidebar';
import './App.css';

function App() {
    const [showSidebar, setShowSidebar] = useState(window.innerWidth <= 650);

    useEffect(() => {
        const handleResize = () => {
            setShowSidebar(window.innerWidth <= 650);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Router>
            <div>
                <Navbar />         
                < Sidebar />
                <CustomCursor classname="cursor" />
                <Routes>
                    <Route index path="/" element={<Home />}/>
                        <Route path="/events" element={<EventPage events={events} />} />
                        <Route path="/payment" element={<PaymentPage />} />
                        <Route path="/events/:id" element={<EventsDetailsPage events={events} />} />
                       
                    
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
