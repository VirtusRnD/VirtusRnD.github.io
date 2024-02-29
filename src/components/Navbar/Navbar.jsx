import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
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

  return (
    <nav>
      <Link to="/" className="title">
        Virtus RnD
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/#landing">Landing</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/main">main</NavLink>
        </li>
        <li>
          <NavLink to="/partner">Partner</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/products2">Products2</NavLink>
        </li>
        <li className="language-toggle" onClick={toggleLanguage}>
          <img src={i18n.language === "en" ? trflag : enflag} alt="Language Flag" width="24" height="24" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
