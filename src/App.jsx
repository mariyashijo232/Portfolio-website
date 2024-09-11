import React, { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Technologies from './components/technologies';
import Experience from './components/Experience';
import Project from './components/project';
import Contact from './components/contact';
import Zara from './components/zara'; 
import Portfolio from './components/portfolio';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('home'); 

  const hideNavbarPages = ['zara', 'portfolio'];
  const shouldHideNavbar = hideNavbarPages.includes(currentComponent);

  const renderComponent = () => {
    switch (currentComponent) {
      case 'zara':
        return <Zara />;
      case 'portfolio':
        return <Portfolio />;
      // case 'project2':
      //   return <Project2Details />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Technologies />
            <Experience />
            <Project setCurrentComponent={setCurrentComponent} />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="relative z-10 min-h-screen">
        {!shouldHideNavbar && <Navbar />}
        {renderComponent()}
        <button 
          onClick={() => setCurrentComponent('home')} 
          className="fixed bottom-4 right-4 bg-transparent border-b text-3xl">
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default App;
