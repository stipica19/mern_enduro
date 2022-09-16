import React, { useEffect, useState } from 'react';
import logo from '../images/log.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../action/userAction';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { flags } from './data/SlideData';
import { navbarLista } from './data/navbar';
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

    window.addEventListener('scroll', changeBackground);
  });

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <div className="container">
        <img
          className={navbar ? 'logo active' : 'logo'}
          src={logo}
          alt="enduro drift bosnien"
        />

        {menuClicked ? (
          <FiX
            size={25}
            className={'navbar__menu'}
            onClick={toggleMenuClick}
          />
        ) : (
          <FiMenu
            size={25}
            className={'navbar__menu'}
            onClick={toggleMenuClick}
          />
        )}
        <ul
          className={`${
            navbar ? 'navbar__list  acitve' : 'navbar__list'
          } ${
            menuClicked
              ? 'navbar__list  navbar__list--active'
              : 'navbar__list'
          }`}
        >
          {navbarLista &&
            navbarLista.map((item) => (
              <>
                {!item.ostalo ? (
                  <li
                    key={item.id}
                    className="navbar__item"
                    onClick={toggleMenuClick}
                  >
                    <Link className="navbar__link" to={item.path}>
                      {t(item.label)}
                    </Link>
                  </li>
                ) : (
                  <>
                    {userInfo && item.label == 'ADMIN' ? (
                      <li className="navbar__item" key={item.id}>
                        <span
                          className="navbar__link"
                          onClick={() => setDisplay(!display)}
                        >
                          {t(item.label)}
                        </span>
                        <ul>
                          {item.ostalo.map((i) => (
                            <>
                              {i.logout ? (
                                <li key={i.id}>
                                  <Link
                                    className="navbar__linkk"
                                    to={i.path}
                                    onClick={logoutHandler}
                                  >
                                    {i.label}
                                  </Link>
                                </li>
                              ) : (
                                <li key={i.id}>
                                  <Link
                                    className="navbar__linkk"
                                    to={i.path}
                                  >
                                    {i.label}
                                  </Link>
                                </li>
                              )}
                            </>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <>
                        {item.label == 'navbar_gallery' && (
                          <li className="navbar__item">
                            <span
                              className="navbar__link"
                              onClick={() => setDisplay(!display)}
                            >
                              {t(item.label)}
                            </span>
                            <ul>
                              {item.ostalo.map((i) => (
                                <>
                                  <li>
                                    <Link
                                      className="navbar__linkk"
                                      to={i.path}
                                    >
                                      {i.label}
                                    </Link>
                                  </li>
                                </>
                              ))}
                            </ul>
                          </li>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            ))}
          <li className="navbar__item">
            <img
              src={flags[0].link}
              alt="deFlag"
              className="flags"
              onClick={() => {
                i18next.changeLanguage('de');
              }}
            />
            <img
              src={flags[1].link}
              alt="deFlag"
              className="flags"
              onClick={() => {
                i18next.changeLanguage('en');
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
