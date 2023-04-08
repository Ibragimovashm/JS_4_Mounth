import React from "react";
import menuModuleCss from "./Menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
    <div className={menuModuleCss.parent_shadow}></div>
      <div className={menuModuleCss.parent_menu}>
        <div className="container">
          <div className={menuModuleCss.child_menu}>
            <ul className={menuModuleCss.ul_for_liMenu}>
              <li>
                <Link to={"/"}>
                  <button>Главная</button>
                </Link>
              </li>
              <li>
                <Link to={"/about"}>
                  <button>about</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
