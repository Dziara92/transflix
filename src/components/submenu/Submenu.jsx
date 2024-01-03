/* eslint-disable react/prop-types */
import "./submenu.css";
// import { useState } from "react";
import { menu } from "../../data/menu";

const Submenu = ({ closeSubMenu, handlerLanguage, isActive }) => {
  const changeLenguage = () => {
    handlerLanguage();
  };

  return (
    <>
      <ul>
        {menu.map((item, id) => {
          return (
            <li key={id} onClick={closeSubMenu}>
              <a href={item.url}>{isActive ? item.page : item.pageAng}</a>
            </li>
          );
        })}
      </ul>
      <div className="submenu_language">
        <button
          className={isActive ? "btn__lang activebtn" : "btn__lang"}
          onClick={changeLenguage}
        >
          PL
        </button>
        <span>|</span>
        <button
          className={isActive ? "btn__lang " : "btn__lang activebtn"}
          onClick={changeLenguage}
        >
          ENG
        </button>
      </div>
    </>
  );
};

export default Submenu;
