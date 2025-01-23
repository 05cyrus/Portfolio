import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Contact from './components/Contact';
import Description from './components/Description';
import Landing from './components/Landing';
import Projects from './components/Projects';
import SlidingImages from './components/SlidingImages';
import Preloader from './components/Preloader';
import styles from './globals.css';
import Header from './components/Header';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default'; // Reset cursor to default
      window.scrollTo(0, 0); // Scroll to top on load
    }, 2000);
    return () => clearTimeout(preloadTimer); // Cleanup timeout on unmount
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? <Preloader /> : (
        <>
          <Header />
          <Landing />
          <Description />
          <Projects />
          <SlidingImages />
          <Contact />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;