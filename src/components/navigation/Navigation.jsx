import "./navigation.css";
import Bars from "../../assets/icons/bars";
import CloseBars from "../../assets/icons/CloseBars";
import Submenu from "../submenu/Submenu";
import Logo from "./../../assets/img/Logo_Nav.svg";
import { useState } from "react";
import { menu } from "../../data/menu";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const Navigation = ({ isActive, handlerLanguage }) => {
  const changeLenguage = () => {
    handlerLanguage();
  };

  const [isActiveSubMenu, setIsActiveSubMenu] = useState(false);
  const openSubMenu = () => {
    setIsActiveSubMenu((prev) => !prev);
  };

  const closeSubMenu = () => {
    setIsActiveSubMenu(false);
  };
  const scrollToTheTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const menuVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  return (
    <div className="nav__container">
      <nav className="container">
        <div className="nav__logo" onClick={scrollToTheTop}>
          <motion.img
            className="logo"
            src={Logo}
            alt="Logo firmy TransFlix"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
        <div className="nav__menu--mobile">
          <button className="nav__btn" onClick={openSubMenu}>
            {isActiveSubMenu ? <CloseBars /> : <Bars />}
          </button>
        </div>
        <motion.div
          className="nav_menu--desktop"
          variants={menuVariants}
          initial="initial"
          animate="animate"
        >
          <ul>
            {menu.map((item, id) => {
              return (
                <li key={id}>
                  <a href={item.url}>{isActive ? item.page : item.pageAng}</a>
                </li>
              );
            })}
          </ul>
          <div className="change-lenguage">
            <button
              className={isActive ? "btn-language activebtn" : "btn-language"}
              onClick={changeLenguage}
            >
              PL
            </button>
            <span>|</span>
            <button
              className={isActive ? "btn-language " : "btn-language activebtn"}
              onClick={changeLenguage}
            >
              ENG
            </button>
          </div>
        </motion.div>
      </nav>

      <div
        className={
          isActiveSubMenu ? "submenu__container active" : "submenu__container"
        }
      >
        <Submenu
          closeSubMenu={closeSubMenu}
          isActive={isActive}
          handlerLanguage={handlerLanguage}
        />
      </div>
    </div>
  );
};

export default Navigation;
