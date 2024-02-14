import React from "react";
import './Main.css';
import { useEffect } from "react";
import ScrollTop from "../../components/ScrollTop/ScrollTop";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "tr", text: "Turkish" },
];

function Main() {
    const { t } = useTranslation();
    const [lang, setLang] = useState("en");

    const handleChange = (e) => {
      setLang(e.target.value);
      let loc = "http://localhost:3000/";
      window.location.replace(
          loc + "?lng=" + e.target.value
      );
  };

  const changeLanguage = (newLang) => {
    setLang(newLang);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + newLang);
  };


    useEffect(() => {
        document.title = 'Virtus RnD Software';
      }, []);

    const onClick = () => {
        window.location.href = '#';
      };
      const onClick1 = () => {
        window.location.href = '#products';
      };
    
      const onClick2 = () => {
        window.location.href = '#about';
      };
    
      const onClick3 = () => {
        window.location.href = '#contact';
      };
    
      const onClick5 = () => {
        window.location.href = '#partner';
      };
    

    return (
        <div className="main">
        <div className="main__container">
       
          
            

        <ScrollTop />
            <div id="buttons">
          <button onClick={onClick}> {t("virtus_arge")}</button>
          <button onClick={onClick1}>{t("products")}</button>
          <button onClick={onClick2}>{t("about")}</button>
          <button onClick={onClick5}>{t("partner")}</button>
          <button onClick={onClick3}>{t("contact")}</button>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('tr')}>Turkish</button>
            </div>
        </div>
        </div>
    );
    }

export default Main;