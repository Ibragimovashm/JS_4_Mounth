import React, { useEffect, useState } from "react";
import { fetchPokemonsInfo } from "../../Api/FetchPokemos";
import { useParams } from "react-router-dom";
import PokemonInfoCss from "./PokemonInfo.module.css";

export const PokemonInfo = () => {
  const [pokemon, setPokemon] = useState();
  const { id } = useParams();
  //   console.log(id);
  useEffect(() => {
    fetchPokemonsInfo(id).then((data) => setPokemon(data));
  }, [id]);
  console.log(pokemon, "pokemon");
  return (
    <div className="container">
      <div className={PokemonInfoCss.parent_block_pokemonInfoComponents}>
        <ul className={PokemonInfoCss.info_pokemonifo}>
          <li>
            <img
              className={PokemonInfoCss.main_img_infoCard}
              src={pokemon?.sprites.other.dream_world.front_default}
              alt="pokemon"
            />
          </li>
          <li>
            <ul className={PokemonInfoCss.small_img_block}>
              <li>
                <img src={pokemon?.sprites.back_default} alt="pokemon" />
              </li>
              <li>
                <img src={pokemon?.sprites.front_default} alt="pokemon" />
              </li>
            </ul>
          </li>
          <li>
            <h3 className={PokemonInfoCss.header_text_info}>
              {pokemon?.forms[0].name}
            </h3>
          </li>
        </ul>
        {/* <ul className={PokemonInfoCss.list_capabilities}>
          {pokemon?.moves.map((i, index) => {
            return <li key={index}>{i.move.name}</li>;
          })}
        </ul> */}

        <div className={PokemonInfoCss.block_3D_model}>
          <ul>
            <h4>Характеристика</h4>
            <li>
              <p>Тип </p>
              <p>{pokemon?.types[0].type.name}</p>
            </li>
            <li>
              <p>ХП</p>
              <p>{pokemon?.stats[0].base_stat}</p>
            </li>
            <li>
              <p>Атака</p>
              <p>{pokemon?.stats[1].base_stat}</p>
            </li>
            <li>
              <p>Защита</p>
              <p>{pokemon?.stats[2].base_stat}</p>
            </li>
            <li>
              <p>Скорость</p>
              <p>{pokemon?.stats[5].base_stat}</p>
            </li>
            <li>
              <p>Вес</p>
              <p>{pokemon?.weight}</p>
            </li>
          </ul>
          <div className={PokemonInfoCss.block_3D_model_inner}>
            <img
              className={PokemonInfoCss.img_3d_model}
              src={pokemon?.sprites.other.home.front_default}
              alt="pokemon"
            />
            <h5>3D модель</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
