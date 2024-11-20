import React, { useEffect, useState } from "react";
import "./SlidingText.css";

const SlidingText = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Sakrij komponentu ako je skrol veći od 50px
      if (window.scrollY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Očisti event listener kada se komponenta unmountuje
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;
  return (
    <section className="scroll-text">
      <div>
        <section className="news-message">
          <p>TERMINE</p>
          <p>FÜR</p>
          <p>2025</p>
          <p>SIND</p>
          <p>ONLINE.</p>
          <p>BOOKING</p>
          <p>BY</p>
          <p>WHATSAPP</p>
          <p>ODER</p>
          <p>E-MAIL</p>
        </section>
      </div>
    </section>
  );
};

export default SlidingText;
