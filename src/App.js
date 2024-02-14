
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Main  from './pages/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Partner from './pages/Partner/Partner.jsx';
import Products from './pages/Products/products.jsx';
import Landing from './pages/landing/landing.jsx';


function App() {

  const [validURL, setValidURL] = useState(true);

  useEffect(() => {
    // Check the validity of the URL
    const isValidURL = checkURLValidity();

    // Update the validURL state variable
    setValidURL(isValidURL);
  }, []);

  const checkURLValidity = () => {
    // Define the valid URLs in your application
    const validURLs = [
     
      'http://localhost:3000/',
      'http://localhost:3000/#products',
      'http://localhost:3000/#about',
      'http://localhost:3000/#contact',
      'http://localhost:3000/#news',
      'http://localhost:3000/#partner',
      'http://localhost:3000/?lng=tr',
      'http://localhost:3000/?lng=en'
      
    ];

    // Get the full pathname of the URL, including the hash

    // Check if the current fullPath is in the validURLs array
    return validURLs.includes(window.location.href);
  };
  return (
    <div className="App">
       {!validURL ? (
        <Partner />
         
      ) : (
        <>
        <Main />
        <Landing />
        <div id="products">
            <Products />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <div id="partner">
            <Partner />
          </div>
        
          <div id="footer" className="footer">
            <Footer />
          </div>
      </>
      )}
    </div>
  );
}

export default App;
