import React, { useEffect, useState } from "react";
import logo from "../images/log.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import deFlag from "../images/flags/4x3/de.svg";
import gbFlag from "../images/flags/4x3/gb.svg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../action/userAction";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [menuClicked, setMenuClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  });

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="container">
        <img
          className={navbar ? "logo active" : "logo"}
          src={logo}
          alt="enduro drift bosnien"
        />

        {menuClicked ? (
          <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
        ) : (
          <FiMenu
            size={25}
            className={"navbar__menu"}
            onClick={toggleMenuClick}
          />
        )}
        <ul
          className={`${navbar ? "navbar__list  acitve" : "navbar__list"} ${
            menuClicked ? "navbar__list  navbar__list--active" : "navbar__list"
          }`}
        >
          <li className="navbar__item" onClick={toggleMenuClick}>
            <Link className="navbar__link" to="/">
              {t("navbar_home")}
            </Link>
          </li>

          <li className="navbar__item" onClick={toggleMenuClick}>
            <Link className="navbar__link" to="/apply">
              {t("navbar_apply")}
            </Link>
          </li>
          <li className="navbar__item">
            <span className="navbar__link" onClick={() => setDisplay(!display)}>
              {t("navbar_gallery")}
            </span>
            {display && (
              <>
                {" "}
                <ul>
                  <li>
                    <Link
                      className="navbar__linkk"
                      to="/gallery"
                      onClick={toggleMenuClick}
                    >
                      PHOTO
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="navbar__linkk"
                      to="/video-gallery"
                      onClick={toggleMenuClick}
                    >
                      VIDEO
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </li>

          <li className="navbar__item" onClick={toggleMenuClick}>
            <Link className="navbar__link" to="/tour-guide">
              {t("navbar_tourguide")}
            </Link>
          </li>
          <li className="navbar__item" onClick={toggleMenuClick}>
            <Link className="navbar__link" to="/guest-book">
              {t("navbar_book")}
            </Link>
          </li>
          <li className="navbar__item" onClick={toggleMenuClick}>
            <Link className="navbar__link" to="/contact">
              {t("navbar_contact")}
            </Link>
          </li>
          <li className="navbar__item" onClick={toggleMenuClick}>
            <Link className="navbar__link" to="/dates-2023">
              {t("navbar_termine")}
            </Link>
          </li>
          {userInfo && (
            <li className="navbar__item">
              <span
                className="navbar__link"
                onClick={() => setDisplay(!display)}
              >
                ADMIN
              </span>
              {display && (
                <>
                  {" "}
                  <ul>
                    <li>
                      <Link
                        className="navbar__linkk"
                        to="/admin"
                        onClick={toggleMenuClick}
                      >
                        ADMIN
                      </Link>
                    </li>
                    <li className="navbar__item">
                      <Link
                        className="navbar__linkk"
                        to="/"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </li>
          )}

          <li
            className="navbar__item"
            onClick={() => {
              i18next.changeLanguage("de");
            }}
          >
            <img src={deFlag} alt="deFlag" className="flags" />
          </li>
          <li
            className="navbar__item"
            onClick={() => {
              i18next.changeLanguage("en");
            }}
          >
            <img src={gbFlag} alt="deFlag" className="flags" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
