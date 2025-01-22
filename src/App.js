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
import { translate } from "./components/Translation/Translation";

function App() {
  useEffect(() => {
    const virtusarge = translate("virtus_arge");
    document.title = virtusarge;
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollTop />
        <Routes>
          {/* Define specific routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/servicesweb" element={<ServicesWeb />} />
          <Route path="/servicesmobile" element={<ServicesMobile />} />
          <Route path="/servicesai" element={<ServicesAI />} />
          <Route path="/servicesdigital" element={<ServicesDigital />} />

          {/* Catch-all route to redirect to Landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;