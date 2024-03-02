import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import trflag from "../../common/SvgIcon/turkey-flag.svg";
import enflag from "../../common/SvgIcon/united-kingdom-flag.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const handleNavLinkClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close the menu after clicking a link
  };

  return (
    <nav>
      <Link to="/" className="title">
        Virtus RnD
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li onClick={() => handleNavLinkClick("about")}>
          <span>About</span>
        </li>
        <li onClick={() => handleNavLinkClick("testpage")}>
          <span>Products</span>
        </li>
        <li onClick={() => handleNavLinkClick("partner")}>
          <span>Partner</span>
        </li>
        <li onClick={() => handleNavLinkClick("contact")}>
          <span>Contact</span>
        </li>
        <li className="language-toggle" onClick={toggleLanguage}>
          <img src={i18n.language === "en" ? trflag : enflag} alt="Language Flag" width="24" height="24" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
