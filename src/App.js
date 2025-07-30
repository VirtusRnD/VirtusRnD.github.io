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
import ServicesDigital from "./pages/servicesDigital/servicesDigital.jsx";
import ServicesMobile from "./pages/servicesMobile/servicesMobile.jsx";
import ServicesWeb from "./pages/servicesWeb/servicesWeb.jsx";
import ServicesAI from "./pages/servicesAI/servicesAI.jsx";
import Team from "./pages/Team/Team.jsx";
import ServicesConsultant from "./pages/servicesConsultant/servicesConsultant.jsx";

import { translate } from "./components/Translation/Translation";

function App() {

 

  useEffect(() => {
    const virtusarge = translate("virtus_arge");
    document.title = virtusarge;
  }, []);

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
              <ServicesConsultant />
            </div>

            <div id="servicesweb">
              <ServicesWeb />
            </div>
            <div id="servicesmobile">
              <ServicesMobile />
            </div>
            <div id="servicesai">
              <ServicesAI />
            </div>
            <div id="servicesdigital">
              <ServicesDigital />
            </div>

            <div id="teampage">
              <Team/>
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