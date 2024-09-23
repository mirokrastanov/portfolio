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

const App = () => {
  // ' container mx-auto px-8 max-md-500:px-4 max-md-300:ml-0 ';

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
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;
