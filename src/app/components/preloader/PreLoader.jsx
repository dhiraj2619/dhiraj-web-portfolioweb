"use client";

import React, { useEffect, useState } from "react";

const PreLoader = () => {
  const letters = "DHIRAJ".split("");
  const firstLetterImage = "/assets/images/icons/d.png";

  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const closeTimer = window.setTimeout(() => setIsClosing(true), 2300);
    const hideTimer = window.setTimeout(() => setIsVisible(false), 3150);

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(closeTimer);
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
    <div className={`preloader ${isClosing ? "preloader--shutter" : ""}`}>
      <h2 className="preloader__name" aria-label="Dhiraj">
        {letters.map((char, index) =>
          index === 0 ? (
            <img
              key={`${char}-${index}`}
              src={firstLetterImage}
              alt="D"
              className="preloader__letter preloader__letter--image h-[66px]"
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
          ),
        )}
      </h2>
    </div>
  );
};

export default PreLoader;
