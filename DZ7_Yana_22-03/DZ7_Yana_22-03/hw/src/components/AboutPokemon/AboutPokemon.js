import { useEffect } from "react";
import React, { useState } from "react";
import { fetchPokemons } from "../../Api/FetchPokemos";
import AboutPokemonCss from "./AboutPokemon.module.css";

const AboutPokemon = () => {
  const [newlist, setNewlist] = useState([]);
  useEffect(() => {
    fetchPokemons(setNewlist);
  }, []);

  return (
    <div className="container">
      <div className={AboutPokemonCss.parent_AboutPokekmon}>
        <h3>Pokemon names</h3>
        <ul className={AboutPokemonCss.ul_for_li_AboutPokemon}>
          {newlist.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default AboutPokemon;
