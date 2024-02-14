import React from 'react';
import "./Footer.css";

import { useTranslation } from "react-i18next";



const Footer = () => {

    const { t } = useTranslation();

    const footer_copyright = t("footer_copyright");
    const footer_terms_condi = t("footer_terms-condi");
    const footer_privacy = t("footer_privacy");
    const footer_security = t("footer_security");
    const footer_cookie = t("footer_cookie");

    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links__div">
                        <h4>For Business</h4>
                        <a href = "/Employer">
                            <p>Employer</p>
                        </a>
                        <a href = "/Employer2">
                            <p>Employer 2</p>
                        </a>
                        <a href = "/Employer3">
                            <p>Employer 3</p>
                        </a>
                    </div>
                    <div className="sb__footer-links__div">
                        <h4>Resources</h4>
                        <a href = "/resources">
                            <p>resources</p>
                        </a>
                        <a href = "/resources2">
                            <p>resources 2</p>
                        </a>
                        <a href = "/resources3">
                            <p>resources 3</p>
                        </a>
                    </div>

                    <div className="sb__footer-links__div">
                        <h4>Company</h4>
                        <a href = "/about">
                            <p>About</p>
                        </a>
                        <a href = "/about1">
                            <p>About 1</p>
                        </a>
                        <a href = "/about2">
                            <p>About 2</p>
                        </a>
                    </div>
                    <div className="sb__footer-links__div">
                        <h4>{t("social_media")}</h4>
                        <div className="socialmeadi">
                            <p>
                                
                                <a href="https://www.linkedin.com/company/virtusarge/">
                                    <img src={process.env.PUBLIC_URL + '/linkedin.png'} alt="LinkedIn" />
                                </a>
                            </p>
                            <p>
                                <a href="https://www.instagram.com/virtusarge"> 
                                    <img src={process.env.PUBLIC_URL +"instagram.png"} alt="Instagram" />
                                </a>
                            </p>
                            <p>
                                <a href="https://www.facebook.com/virtusarge"> 
                                    <img src={process.env.PUBLIC_URL +"facebook.png"} alt="Facebook" />
                                </a>
                            </p>
                            
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                    <p>Copyright © {new Date().getFullYear()}
                        &nbsp;{footer_copyright}
                    </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="./gizlilik_politikasi.pdf"><div><p>{footer_terms_condi}</p></div></a>
                        <a href="/privacy"><div><p>{footer_privacy}</p></div></a>
                        <a href="/security"><div><p>{footer_security}</p></div></a>
                        <a href="/cookie"><div><p>{footer_cookie}</p></div></a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;