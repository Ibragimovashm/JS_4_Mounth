import React from "react";
import menuModuleCss from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={menuModuleCss.parent_menu}>
      <div className="container">
        <div className={menuModuleCss.child_menu}>
          <ul className={menuModuleCss.ul_for_liMenu}>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/about">About pokemons</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menu;
