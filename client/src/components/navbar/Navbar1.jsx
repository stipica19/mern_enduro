import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import "./Navbar.css";
import { menuItems as menuData } from "./navItems";
import MenuItems from "./MenuItems";
import i18next from "i18next";
import logo from "../../images/log.png";
import { flags } from "../data/SlideData";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar1 = memo(() => {
  const [navbar, setNavbar] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleToggle = useCallback(() => {
    setNavbarOpen((prev) => !prev);
  }, []);

  const changeBackground = useCallback(() => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  // Memoiziraj menuItems
  const menuItems = useMemo(() => menuData, [menuData]);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="nav-container">
        <div className="navbar-logo">
          <NavLink to="/">
            <img
              src={logo}
              height="auto"
              width="70px"
              className={navbar ? "logo active" : "logo"}
              alt="anmeldung"
            />
          </NavLink>
        </div>
        <div className="nav-icon" onClick={handleToggle}>
          <nav className="navBar">
            <button aria-label={navbarOpen ? "Close menu" : "Open menu"}>
              {navbarOpen ? <FiX size={25} /> : <FiMenu size={25} />}
            </button>
          </nav>
        </div>
        <ul className={navbarOpen ? "nav-menu menus active" : "nav-menu menus"}>
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems
                handleToggle={handleToggle}
                items={menu}
                key={index}
                depthLevel={depthLevel}
              />
            );
          })}
          {userInfo && (
            <MenuItems
              items={{
                id: 8,
                label: "ADMIN",
                url: "admin",
                submenu: [
                  { id: 1, label: "-ADMIN", url: "/admin" },
                  { id: 2, label: "-LOGOUT", url: "/", logout: true },
                ],
              }}
            />
          )}

          <li className="menu-items flags">
            <img
              src={flags[0].link}
              alt="deFlag"
              className="flags"
              aria-label="Switch to German"
              loading="lazy"
              onClick={() => changeLanguage("de")}
            />
            <img
              src={flags[1].link}
              alt="deFlag"
              aria-label="Switch to English"
              className="flags"
              loading="lazy"
              onClick={() => changeLanguage("en")}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default Navbar1;
