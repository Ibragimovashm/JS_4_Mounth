import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import polemonCardCss from "./PokemonCard.module.css";

const PokemonCard = ({ card }) => {
  const [listUrl, setListUrl] = useState([]);
  // console.log(cardURL, "--- cardURL");
  useEffect(() => {
    axios
      .get(card.url)
      .then((res) => res.data)
      .then((info) => {
        setListUrl(info.sprites.other.dream_world.front_default);
      });
  }, [card]);
  // listUrl, cardURL
  return (
    <>
      <Link to={`info/${card.name}`}>
        <div className={polemonCardCss.parent_pakemon}>
          <ul className={polemonCardCss.ul_parent_for_name}>
            <li>
              <h2 className={polemonCardCss.pokemon_names}>{card.name}</h2>
            </li>
            <li>
              {console.log(listUrl, "listUrlka")}
              <img
                className={polemonCardCss.img_pokemons}
                src={listUrl}
                alt="photo"
              />
            </li>
          </ul>
        </div>
      </Link>
    </>
  );
};

export default PokemonCard;
