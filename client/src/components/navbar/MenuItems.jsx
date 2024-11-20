import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

import { FiArrowRight, FiArrowDown } from "react-icons/fi";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuItems = ({ handleToggle, items, depthLevel }) => {
  const { t } = useTranslation();
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              <Link to="/" onClick={handleToggle}>
                {t(items.label)}
              </Link>
            ) : (
              <Link to={items.url} onClick={handleToggle}>
                {t(items.label)}
              </Link>
            )}

            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <span> &raquo;</span>
            ) : dropdown ? (
              <FiArrowDown
                color="white"
                onClick={() => setDropdown((prev) => !prev)}
              />
            ) : (
              <FiArrowRight
                color="white"
                onClick={() => setDropdown((prev) => !prev)}
              />
            )}
          </button>

          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {depthLevel > 0 ? (
              <span> &raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url} onClick={handleToggle}>
          {t(items.label)}
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
