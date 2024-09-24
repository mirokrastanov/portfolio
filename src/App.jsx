import React from 'react';
import BackgroundGradient from './components/util/BackgroundGradient';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReminder from './components/shared/ScrollReminder';
import { Toaster } from 'react-hot-toast';
import Education from './components/Education';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <BackgroundGradient />
      <ScrollReminder />
      <Toaster />

      <div className={`container-custom`}>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;
