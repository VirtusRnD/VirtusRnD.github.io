import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Partner from "./pages/Partner/Partner.jsx";
import Products from "./pages/Products/products.jsx";
import Landing from "./pages/landing/landing.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Products2 from "./pages/Products2/Products2.jsx";
import ScrollTop from "./components/ScrollTop/ScrollTop.jsx";
import Testpage from "./pages/testpage/testpage.js";
import NotFound from "./pages/NotFound/NotFound.jsx";

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
      "http://localhost:3000/",
      "http://localhost:3000/#landing",
      "http://localhost:3000/#about",
      "http://localhost:3000/#contact",
    ];

    // Get the full pathname of the URL, including the hash

    // Check if the current fullPath is in the validURLs array
    return validURLs.includes(window.location.href);
  };
  return (
    <Router>
      <div className="App">
        {!validURL ? (
          <NotFound />
        ) : (
          <>
            <Navbar />
            <div id="landing">
              <Landing />
            </div>

            <ScrollTop />

            <div id="about">
              <About />
            </div>

            <div id="testpage">
              <Testpage />
            </div>

            <div id="contact">
              <Contact />
            </div>

            <div id="footer" className="footer">
              <Footer />
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
