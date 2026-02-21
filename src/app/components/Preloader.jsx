"use client";

import { useEffect, useState } from "react";

const letters = "DHIRAJ".split("");
const firstLetterImage = "/assets/images/preloader-d.png";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setIsFading(true), 2100);
    const hideTimer = window.setTimeout(() => setIsVisible(false), 2500);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`preloader ${isFading ? "preloader--fade" : ""}`}>
      <h2 className="preloader__name" aria-label="Dhiraj">
        {letters.map((char, index) => (
          index === 0 ? (
            <img
              key={`${char}-${index}`}
              src={firstLetterImage}
              alt="D"
              className="preloader__letter preloader__letter--image"
              style={{ animationDelay: `${index * 0.14}s` }}
            />
          ) : (
            <span
              key={`${char}-${index}`}
              className="preloader__letter"
              style={{ animationDelay: `${index * 0.14}s` }}
            >
              {char}
            </span>
          )
        ))}
      </h2>
    </div>
  );
};

export default Preloader;
