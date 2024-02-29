import React from "react";
import "./landing.css";

import { useTranslation } from "react-i18next";

function Landing() {

  const { t } = useTranslation();


const landing_title = t("landing_title");

  return (
    <div className="container">
      <div className="image1">
        <img src={window.location.origin + "/image_0.jpg"} alt="landing" />
        <div className="metin">
          <h2>{landing_title}</h2>
          
        </div>
      </div>
    </div>
  );
}

export default Landing;

