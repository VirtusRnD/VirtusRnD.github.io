import React from "react";
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

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollTop />
        <Navbar />
        <Landing />
        <About />
        <Testpage />
        <Contact />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products2" element={<Products2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
