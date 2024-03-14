import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Landing from "./pages/landing/landing.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ScrollTop from "./components/ScrollTop/ScrollTop.jsx";
import Testpage from "./pages/testpage/testpage.js";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  const [validURL, setValidURL] = useState(true);

  useEffect(() => {
    const isValidURL = checkURLValidity();

    setValidURL(isValidURL);
  }, []);

  const checkURLValidity = () => {
    const validURLs = [
      "http://localhost:3000/",
      "http://localhost:3000/?lang=en",
      "http://localhost:3000/?lang=tr",
      "http://localhost:3000/#landing",
      "http://localhost:3000/#about",
      "http://localhost:3000/#contact",
      "http://virtusarge.com/",
      "http://virtusarge.com/?lang=en",
      "http://virtusarge.com/?lang=tr",
      "http://virtusarge.com/#landing",
      "http://virtusarge.com/#about",
      "http://virtusarge.com/#contact",
      "https://virtusrnd.github.io",
      "https://virtusrnd.github.io/?lang=en",
      "https://virtusrnd.github.io/?lang=tr",
      "https://virtusrnd.github.io/#about",
      "https://virtusrnd.github.io/#landing",
      "https://virtusrnd.github.io/#contact",
    ];

    return validURLs.includes(window.location.href);
  };
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
