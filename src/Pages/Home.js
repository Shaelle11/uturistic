import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import EventSections from '../Components/EventSections';
import BlogSection from '../Components/BlogSection';
import events from '../Components/map';
import CustomCursor from '../Components/CustomCursor';

function Home() {
  return (
    <div>    
      <Navbar />
      <HeroSection />
      <EventSections events={events} />
      <BlogSection />
      <CustomCursor/>   
      </div>
  );
}

export default Home;
