import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";

const CookieConset = () => {
  const [showConsent, setShowModal] = useState(true);

  const handleAccept = () => {
    setShowModal(false);
    // Postavite kolačić za pristanak ovdje
  };

  const handleDecline = () => {
    setShowModal(false);
    // Implementirajte logiku za odbijanje kolačića
  };
  return (
    <div className="App">
      {showConsent && (
        <CookieConsent
          location="bottom"
          buttonText="Akzeptieren"
          enableDeclineButton // Omogući dugme za odbijanje
          declineButtonText="Ablehnen"
          cookieName="cookies-consent"
          style={{ background: "#333333" }}
          buttonStyle={{ color: "#fff", background: "#0ae002" }}
          declineButtonStyle={{ color: "#fff", background: "#333333" }}
          onAccept={handleAccept}
          onDecline={handleDecline}
        >
          Diese Website verwendet „Cookies“, um die Benutzererfahrung zu
          verbessern.
        </CookieConsent>
      )}
    </div>
  );
};

export default CookieConset;
