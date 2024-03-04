import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import trflag from "../../common/SvgIcon/turkey-flag.svg";
import enflag from "../../common/SvgIcon/united-kingdom-flag.svg";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const handleNavLinkClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const virtusarge = t("virtus_arge");
  const about = t("about");
  const products = t("products");
  const partner = t("partner");
  const contact = t("contact");

  return (
    <nav>
      <Link to="/" className="title">
        {virtusarge}
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <img src="/menu.svg" alt="Menu Icon" width="24" height="24" />


        
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li onClick={() => handleNavLinkClick("about")}>
   <span className="nav-link">{about}</span>
</li>
        <li onClick={() => handleNavLinkClick("testpage")}>
          <span>{products}</span>
        </li>
        <li onClick={() => handleNavLinkClick("partner")}>
          <span>{partner}</span>
        </li>
        <li onClick={() => handleNavLinkClick("contact")}>
          <span>{contact}</span>
        </li>
        <li className="language-toggle" onClick={toggleLanguage}>
          <img src={i18n.language === "en" ? trflag : enflag} alt="Language Flag" width="24" height="24" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
