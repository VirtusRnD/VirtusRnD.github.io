import React from "react";
import "./About.css";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import AboutContent from "./AboutContent.json";

function About() {
    return (
        <div className="about">
            <ContentBlock
                direction="left"
                title={AboutContent.title}
                content={AboutContent.text}
                section={AboutContent.section}
                icon="/graphs.svg"
                id="about"
            />
        </div>
    );
}

export default About;
