import React from "react";
import saloon from "../images/saloon.jpg";
import saraj from "../images/saraj.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Footer = () => {
  return (
    <footer className="footer bg-dark py-3">
      <div className="footer-poderano"></div>
      <div className="grid-3 container grid">
        <div className="">
          <h4>PARTNERS : </h4>
          <a href="https://www.facebook.com/hardenduroworld">
            <p style={{ color: "red" }}>HARD ENDURO WORLD</p>
          </a>
          <div className="partners-img">
            <LazyLoadImage
              src={saloon}
              alt="enduro touren bosnien"
              effect="blur"
            />
            <LazyLoadImage
              src={saraj}
              alt="enduro touren bosnien"
              effect="blur"
            />
            <LazyLoadImage
              src="https://seeklogo.com/images/Z/zona-enduro-logo-AF7FFDA282-seeklogo.com.png"
              alt="enduro touren bosnien"
              effect="blur"
            />
            <LazyLoadImage
              src="http://fork-socks.de/wp-content/uploads/2018/07/logo-ohne-de.png"
              alt="enduro touren bosnien"
              effect="blur"
            />
          </div>
        </div>
        <div className="social">
          <h4>CONTACT US: </h4>
          <p>
            <i className="fas fa-phone"></i> &nbsp; : &nbsp; +387 63 136 095
          </p>
          <p>
            <i className="fas fa-envelope"></i> &nbsp; : &nbsp;
            endurodriftbosnien@gmail.com
          </p>
          <br />
        </div>
        <div className="social sociall">
          <h4>FOLLOW US: </h4>
          <a href="https://www.instagram.com/enduro_drift_bosnien/">
            {" "}
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/Enduro-drift-Bosnien-522789664770777/">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCxanUZadIvZEfThuUJ2mB2w">
            <i className="fab fa-youtube fa-2x"></i>
          </a>

          <br />
        </div>
      </div>
      <div className=" grid-3 container grid">
        <div className="payment">
          <h4>PAYMENT INSTRUCTION: </h4>
          <p> Mladen Brnas</p>
          <p> Silvija Strahimira Kranjcevica</p>
          <p> Gornji Vakuf-Uskoplje</p>
          <p>IBAN: BA39 3382 8028 2483 3544</p>
          <p> BIC/SWIFT:UNCRBA22</p>
          <p> Bank name: UniCredit Bank d.d. Mostar</p>
          <p> Bank adress:Kardinala Stepinca b.b., 88000 Mostar, BiH</p>
        </div>

        <div className="address">
          <h4>ADDRESS : </h4>
          <p>Silvija Strahimira Kranjcevica,</p>
          <p>70280 - Gornji Vakuf-Uskoplje,</p>
          <p>Bosnia and Hercegovina</p>
        </div>
        <div className="footer-title">
          <h1>ENDURO DRIFT BOSNIEN</h1>
          <p>Copyright &copy; 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
