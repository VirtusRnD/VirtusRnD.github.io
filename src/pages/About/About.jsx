import React from "react";
import "./About.css";
import ContentBlock from "../../components/ContentBlock/ContentBlock";

import { useTranslation } from "react-i18next";

function About() {

    const { t } = useTranslation();

    const AboutContent = {
        "title": t("why_virtus"),
        "text": t("about_content"),
        "section": [
            {
                "title": t("about_inner_1_title"),
                "content": t("about_inner_1_content"),
                "icon": "/notes.svg"
            },
            {
                "title": t("about_inner_2_title"),
                "content": t("about_inner_2_content"),
                "icon": "/notes.svg"
            }
        ]
    };

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
