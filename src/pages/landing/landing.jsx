import React, { useState, useEffect } from "react";
import "./landing.css";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";

function Landing() {
  const { t } = useTranslation();
  const landingTitle = t("landing_title"); // Get the translated title

  const [chars, setChars] = useState([]); // State to store typed characters
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the currently displayed character

  const springConfig = { delay: 50, duration: 150 }; // Adjust delay and duration for typing effect

  const typedProps = useSpring({
    from: { opacity: 10 },
    to: async (next) => {
      await new Promise((resolve) => setTimeout(resolve, springConfig.delay));
      return { opacity: 1 };
    },
    reset: true, // Reset animation after each character
  });

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < landingTitle.length) {
        setChars((prevChars) => [...prevChars, landingTitle[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, springConfig.delay + springConfig.duration);

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, [landingTitle, currentIndex]); // Dependencies for effect

  return (
    <div className="landing_container">
      <div className="landing_image">
        <img src="/landing.svg" alt="Landing page image" />
        <div className="landing_text">
          <h2>
            {chars.map((char, index) => (
              <animated.span key={index} style={typedProps}>
                {char}
              </animated.span>
            ))}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Landing;


