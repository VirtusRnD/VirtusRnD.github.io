import React from "react";
import "./Contact.css";
import { translate } from "../../components/Translation/Translation";
function Contact() {

    


    const contact_title = translate("contact_title");
    const contact_address = translate("contact_address");
    const contact_telephone = translate("contact_telephone");
    const questions = translate("questions");

    return (
        <div className="contact">
            <div className="contact__container">
            <div className="contact__info">
                    <h2 className="contact-h2">{contact_title}</h2>
                        {questions}
                        <p>
                        {contact_address}
                        </p>
                    <p>Email: info@virtusarge.com</p>
                </div>

                <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.44043076721!2d28.373130700000015!3d37.17930219999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf732687fd3eb1%3A0x2815d6eefcce8910!2sMu%C4%9Fla%20Teknopark!5e0!3m2!1str!2str!4v1707123331392!5m2!1str!2str"
                    width="800" 
                    height="600" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

            </div>
        </div>
    );
}

export default Contact;